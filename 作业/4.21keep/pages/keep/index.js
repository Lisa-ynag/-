// pages/keep/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currindex:0,//当前运动的索引
    count:3,//60ms 倒计时时长
    timer:null,//定时器
    sportarr:[
      //运动列表
      {imgSrc:"../../assets/images/qs1.jpg",runname:"开合跳"},
      {imgSrc:"../../assets/images/qs2.jpg",runname:"无影凳"},
      {imgSrc:"../../assets/images/qs3.jpg",runname:"俯卧撑"},
      {imgSrc:"../../assets/images/qs4.jpg",runname:"仰卧起坐"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      //开始运动功能
      this.startSport()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearTimeout(this.data.timer);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearTimeout(this.data.timer);
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
  startSport:function(){
   // console.log('startsport')
   //通过一次性定时器实现倒计时
   this.data.timer = setTimeout(()=>{
    //实现倒计时功能 count--
    this.data.count -- ;
    this.setData({
      count:this.data.count
    })
//当倒计时完成后，进入下一个动作，currindex++
    if(this.data.count<=0){
      //currindex++  当前运动的索引（4
      this.data.currindex ++;
      //如果运动已经完成 ，最后一个动作都完成后，回到首页
      if(this.data.currindex == this.data.sportarr.length){
        //提示完成训练
        wx.showModal({
         showCancel:false,
         title:'keep提示',
         content:'恭喜你完成训练',
         success:res=>{
           //跳转回首页
           wx.redirectTo({
             url: '/pages/keep/first',
           })
         }
        })
          return;//退出，后面的代码块不再执行
      }
      this.setData({
        currindex:this.data.currindex,
        count:3//重新初始化下一个运动的时长
      })
    }
    this.startSport();//继续调用自己
   },1000)
   
   

   
  }
})