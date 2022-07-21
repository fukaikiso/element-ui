// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[
      {id:1,name:'薯愿',price:8,num:2},
      {id:2,name:'可比克',price:4,num:3},
      {id:3,name:'浪味仙',price:5,num:4},
      {id:4,name:'火腿肠',price:3.5,num:5},
    ],
  },

  tapDel(event){
    let index  = event.target.dataset.index
    this.data.goods.splice(index,1)
    this.setData({
      goods:this.data.goods
    })
  },

  tapv1(){console.log('tapv1..')},
  tapv2(){console.log('tapv2..')},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})