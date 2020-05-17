// pages/apidemo/apidemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:['/images/1.jpg','/images/2.jpg','/images/3.jpg','/images/4.jpg'],
    curindex:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //摇一摇
    wx.onAccelerometerChange(res=>{
      if(res.x>1 && res.y>1){
        console.log('下一张')
        //摇到最后一张切换回第一张
        if(this.data.curindex == this.data.imgs.length-1){
          this.data.curindex = -1;
        }
       //修改curindex索引
       this.data.curindex ++;
       this.setData({
         curindex:this.data.curindex
       })
       //震动效果
       wx.vibrateLong({
         success:function(){
           console.log("震动了")
         }
       })
       //提示消息
       wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
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
  // <!-- 获取位置 -->
  ongetLocation:function(){
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(latitude,longitude,speed,accuracy)
      }
     })
    
  },
  //查看位置
  onopenLocation:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
     })
  },
  //获取用户信息
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
  // 拨打电话
  onmakePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '18688770918' 
    })
  },
  //震动
  onvibrateLong:function(){
    wx.vibrateLong({
      success:function(){
        console.log('震动完了')
      }
    })
  },
  // 15ms震动
  onvibrateShort:function(){
    wx.vibrateShort({
      success:function(){
        console.log('15ms')
      }
    })
  },
  // 获取发票抬头
  onchooseInvoiceTitle:function(){
    wx.chooseInvoiceTitle({
      success(res) {

      }
    })
  },
  ononUserCaptureScreen:function(){
    wx.onUserCaptureScreen(function (res) {
      console.log('用户截屏了')
    })
  },
  // 扫一扫
  onscanCode:function(){
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
  },
  onswitchTab(){
    wx.switchTab({
      url: '/pages/apidemo2/apidemo2'
    })
  }
})