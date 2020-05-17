// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      mydata:"我是我的data数据",
      arr:["lisi","wanwu","mantou"],
      proarr:[
        {proname:'口红',price:300},
        {proname:'香水',price:1000},
        {proname:'粉底液',price:500}
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
  clickMe:function(){
    console.log('你点击我了哦')
  }
})