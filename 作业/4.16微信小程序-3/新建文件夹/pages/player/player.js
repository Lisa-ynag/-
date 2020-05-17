// pages/player/player.js
let audioctx = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currIndex:0,//当前播放的音乐索引
      allmusic:[],//存储的所有音乐数据
      titles:[],//存放猜字区的内容  根据歌名而定。
      isFinish:false,//是否填写完成
      isplay:false //音乐是否是播放状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //判断该用户是否去过index页面
      wx.getStorage({
        key: 'isshow',
        success:(res)=>{
          //如果去过了，就加载当前页面的歌曲等信息
         // console.log('success')
          //创建InnerAudioContext对象
          audioctx = wx.createInnerAudioContext();
          //加载
          this.init();
        },
        fail:res=>{
          //如果没去过，先跳转到index页面
          wx.redirectTo({
            url: '/pages/index/index',
          })
          console.log('fail')
        }
      })
  },
  //初始化
  init:function(){
    console.log('init');
    //请求json数据
    wx.request({
      url: 'http://localhost:8000/getmusic.json',
      success:res=>{
       // console.log(res);//得到所有的几首音乐数据
        //1.给titles赋值。
        this.data.titles=[];
        //根据名称的长度进行循环遍历
        for(let i=0;i<res.data.data[this.data.currIndex].songname.length;i++){
          this.data.titles.push("");
        }
        console.log(this.data.currIndex,res.data.data[this.data.currIndex],this.data.titles);
        //更新data数据
        this.setData({
          titles:this.data.titles,
          allmusic: res.data.data
        })
      //给播放器设置src
      audioctx.src = res.data.data[this.data.currIndex].src;
      // console.log(res.data.data)
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
   //清除猜字区的文字
   cleartxt(e){
    //的到点击的猜字区ID
   // console.log(e.target.id)
   this.data.titles[e.target.id]="";
   this.setData({
     titles:this.data.titles,
     isFinish:false
   })
   //console.log(this.data.titles)
  },
   //点击关键字，填充到猜字区
   getitem(e){
    //1.获取到所点击的关键？
    let word = this.data.allmusic[this.data.currIndex].keyword[e.target.id];
    console.log(word)
    //2.对应的填充到title数组中
    for(let i=0;i<this.data.titles.length;i++){
      if(this.data.titles[i]==""){
        this.data.titles[i]=word;
        break;
      }
      };
      //表示猜字区填写完成，可以进行歌名比较了
      if(!this.data.titles.includes('')){
        this.setData({
          isFinish:true
        })
      };
      //3.更新data中的数据
      this.setData({
        titles:this.data.titles
      });
      //4.如果已经填充了最后一个字时，要进行判断
      if(this.data.isFinish){
        audioctx.stop();//停音乐
        console.log(this.data.titles,this.data.allmusic[this.data.currIndex])
        if(this.data.titles.join('')==this.data.allmusic[this.data.currIndex].songname){
          wx.showModal({
            title:'提升信息',
            content:'回答正确',
            confirmText:"下一关",
            success:res=>{
              //判断是否是最后一关
              if(this.data.allmusic.length !=0 && this.data.currIndex ==this.data.allmusic.length-1){
                wx.redirectTo({
                  url: '/pages/win/win',
                })
              }else{
                console.log("进入下一首",this.data.currIndex)
                //没有通过，进入下一首歌曲
                this.setData({
                  currIndex:this.data.currIndex+1,
                  isFinish:false
                })
                //重新设置titles
                this.data.titles = [];
                for(let i=0;i<this.data.allmusic[this.data.currIndex].songname.length;i++){
                  this.data.titles.push("");
                }
                this.setData({
                  titles:this.data.titles
                })
                //重新设置音乐路径
                audioctx.src = this.data.allmusic[this.data.currIndex].src;
                audioctx.onError((res) => {
                  console.log(res.errMsg)
                  console.log(res.errCode)
                })
              }
            }
          })
        }else{
          wx.showToast({
            title: '答案错误',
            icon:"none",
            image:"/images/error.png",
            duration:1500
          })
        }
      }
    },
    //播放音乐
    audioplay:function(){
      this.setData({
        isplay:!this.data.isplay
      })
      if(this.data.isplay){
        audioctx.play();
      }else{
        audioctx.pause();
      }
    },
    //分享
    onShareAppMessage(){
      return{
        title:`紧急呼叫，我卡在第${this.data.currIndex+1}关了，快来帮帮我`,
        success(){
          console.log('success');
        },
        fail(){
          console.log('fail');
        }
      }
    } 
})