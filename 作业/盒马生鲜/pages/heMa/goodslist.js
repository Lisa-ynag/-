// pages/heMa/goodslist.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allgoodsList:[],
    index:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index
    console.log(index);
      wx.request({
        url: 'http://localhost:3000/getgoods',
        success:res=>{
          console.log(res)
          this.setData({
            index:index,
            allgoodsList:res.data.data[index]
          })
         console.log(res.data.data)
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
  toshop:function(e){
    console.log(e)
    //第一步获取到当前点击加入购物车的产品信息
    let good = this.data.allgoodsList[e.currentTarget.id];
    // console.log('数据',e.currentTarget.id)
    let cart = app.globalData.goodsList;//购物车数据
    //判断该商品购物车中是否存在
    let flag = false;
    //如果有返回对象，没有就算返回undefined
    flag = cart.find(item=>{
      return item == good;
    })
    flag = (flag==undefined)?false:true;
    //如果存在改变数量，不存在整个对象添加进去
    if(flag){
      this.data.allgoodsList[e.currentTarget.id].count++;
      wx.showToast({
        title: '加入成功',
        duration:2000
      })
    }else{
      cart.push(good);
      wx.showToast({
        title: '加入成功',
        duration:2000
      })
    }
    //输出全局变量 
    console.log(app.globalData.goodsList)
  },
  // onclick(){
   
  //   wx.navigateTo({
  //     url: '/pages/heMa/goodsdetail'
  //   })
  // }
})