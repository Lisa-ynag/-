// pages/douban/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      allMovies:[{jsonkey:'coming_soon'},
                  {jsonkey:'in_theaters'},
                  {jsonkey:'top250'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'isshow',
      success:res=>{
        //加载数据
        this.getData(0);
        this.getData(1);
        this.getData(2);
      },
      fail:res=>{
        //去欢迎页面
        wx.redirectTo({
          url: '/pages/douban/first',
        })
      }, 
    })
   
  },
  getData:function(index){
    //请求数据（即将上映电影，正在上映，top250）
    wx.request({
      url: 'http://localhost:8000/'+this.data.allMovies[index].jsonkey,
      success:res=>{
        console.log(res);
        this.data.allMovies[index].title = res.data.title;//类别名称
        this.data.allMovies[index].movies = res.data.subjects;//电影列表数据
        this.setData({
          allMovies:this.data.allMovies
        })
        wx.setNavigationBarTitle({
          title: res.data.title
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

  }
})