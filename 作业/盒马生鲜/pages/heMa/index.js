// pages/heMa/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allShopping:[],
    allscrollXList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/goodsSorts',
      success:res=>{
      //  console.log(res);
        this.setData({
          allShopping:res.data.data
         
        })
        console.log(res.data.data)
      }
    })
    wx.request({
      url: 'http://localhost:3000/scrollXList',
      success:res=>{
        console.log(res);
        this.setData({
          allscrollXList:res.data.data
         
        })
        console.log(res.data.data)
      }
    })
    wx.setNavigationBarTitle({
      title: '盒马生鲜'
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
  onclick(e){
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/heMa/goodslist?index='+index,
    })
  }
})