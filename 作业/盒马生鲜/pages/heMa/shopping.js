// pages/heMa/shopping.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingList:[],
    sumPrice:0,
    allStatus:"success"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setNavigationBarTitle({
    //   title: '购物车'
    // })
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
    console.log('购物车：',app.globalData.goodsList)
    //给购物车数据增加一个type属性（显示icon)
   let goodsList = app.globalData.goodsList;
   goodsList.map(item=>{
     item.type = "success"
   })
   this.setData({
     shoppingList:goodsList
   })
   this.getTotal();//计算价格
  },
  //计算总价
  getTotal:function(){
    let sumprice = 0;
    let goods = this.data.shoppingList;
    for(let i=0;i<goods.length;i++){
      if(goods[i].type=="success"){
        sumprice += goods[i].price * goods[i].count
      }
    }
    this.setData({
        sumPrice:sumprice.toFixed(2)
    })
  },
  //勾选产品
  selectGoods:function(e){
    //根据索引ID 获得当前选中的产品
    let seletedpro = this.data.shoppingList[e.currentTarget.id];
    //如果当前选中就变成空心园，否则就是勾选效果
    seletedpro.type =(seletedpro.type == "success")?'circle':'success';
    //更新data数据
    this.setData({
      shoppingList:this.data.shoppingList
    })
    //重新计算价格
    this.getTotal();
    //判断底部状态是否是全选
    this.isAllSelected();
  },
  //判断底部状态是否是全选
  isAllSelected:function(){
    //如果所有的商品都是选中的，底部的全选按钮也一个是success
    let goods = this.data.shoppingList;
    //如果some中匹配到了结果就返回true ，否则返回false
    let flag = goods.some(item=>{
      return item.type == 'circle';
    })
    this.data.allStatus = flag?'circle':'success';
    this.setData({
      allStatus:this.data.allStatus
    })
  },
  //全选
  selectall:function(){
    //得到当前自身的状态
    let status = this.data.allStatus;
    let goods = this.data.shoppingList;
    status = (status=="success")?'circle':'success';
    this.data.allStatus = status;
    //更新商品列表的type状态
    goods.map(item=>{
      item.type = status
    })
    //更新data中数据
    this.setData({
      shoppingList:this.data.shoppingList,
      allStatus:this.data.allStatus
    })
    //重新计算价格
    this.getTotal();
  },
  //删除方法： 删除shoplist,globaldata中的goodslist
  delGoods:function(){ 
      let {shoppingList} =this.data;
      shoppingList.forEach((v,index)=>{
        if(v.type==="success"){
          shoppingList.splice(index,1)
        }
      })
      this.setData({
        shoppingList
      });
      this.getTotal()
     
  },

  //增加数量
  addCount:function(e){
    this.data.shoppingList[e.currentTarget.id].count++;
    this.setData({
      shoppingList:this.data.shoppingList
    })
    this.getTotal();
  },
  //减少数量
  reduceCount:function(e){
    let count = this.data.shoppingList[e.currentTarget.id].count--;
    if(count<=1){
      //已经是1不能再减少
      this.data.shoppingList[e.currentTarget.id].count = 1;
      wx.showModal({
        title:'数量不能小于1',
        content:'错误操作'
      })
    }else{
      this.data.shoppingList[e.currentTarget.id].count - 1;
    }
    this.setData({
      shoppingList:this.data.shoppingList
    })
    this.getTotal(); 
  },
 
  //结算方法
  gobuy:function(){
    wx.showToast({
      title: '结算成功',
      duration:2000
    })
    let {shoppingList} =this.data;
    shoppingList.forEach((v,index)=>{
      if(v.type==="success"){
        shoppingList.splice(index)
      }
    })
    this.setData({
      shoppingList
    });
    this.getTotal()
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