// pages/demo1/demo1.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   inputVal:""   //
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  godemo(){
    app.globalData.todoList.push(this.data.inputVal);
    wx.redirectTo({
      url: '/pages/demo/demo'
    })
    
  },
  getVal(e){
    this.setData({
      inputVal:e.detail.value
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
//   openToast: function() {
//     this.setData({
//         toast: true
//     });
//     setTimeout(() => {
//         this.setData({
//             hideToast: true
//         });
//         setTimeout(() => {
//             this.setData({
//                 toast: false,
//                 hideToast: false,
//             });
//         }, 300);
//     }, 3000);
// },
})