// pages/douban/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
      // let imgs = this;
      wx.request({
        url: 'http://localhost:8000/coming_soon',
        success:res=>{
          console.log(res);
          this.setData({
            movies:res.data.subjects
          })
        }
      })
      //存储isshow
      wx.setStorage({
        data: true,
        key: 'isshow',
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
  onstart:function(){
    wx.redirectTo({
      url: '/pages/douban/index',
    })
  }
})