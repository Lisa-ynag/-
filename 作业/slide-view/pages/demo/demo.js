// pages/demo/demo.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     todoList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({  //设置data
      todoList: app.globalData.todoList
    })
  },
  godemo1(){
    wx.redirectTo({
      url: '/pages/addtodo/addtodo',
    })
  },
  delate(e){
    wx.showModal({
     title:'删除成功',
     showCancel:false,
     success:()=>{
      this.data.todoList.splice(e.currentTarget.dataset.id,1)
      this.setData({
        todoList:this.data.todoList 
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