// pages/databind/databind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    className: 'round',
    size: 200,

    num: 1, 
    url: '/images/3.jpg',
    name: '亮亮',
    age: 29,
    married: true,
    hobby: ['吃', '喝', '玩', '乐'],
    friends: [
      {name: '涛哥', age:35, married:true},
      {name: '楠楠', age:25, married:false},
      {name: '小新', age:28, married:false},
    ],
    school: {
      name: '清华大学',
      loc: '五道口'
    },
    foods : [
      {id: 1001, name:'煎饼', price:10.0},
      {id: 1002, name:'臭豆腐', price:12.0},
      {id: 1003, name:'螺蛳粉', price:18.0},
      {id: 1004, name:'毛鸡蛋', price:5.0}
    ]
  },

  // 点击图片后执行
  tapImage(){
    // let n = this.data.num==1?2:(this.data.num==2?3:1)
    // this.setData({num : n})
    this.setData({
      num:this.data.num % 3 + 1
    })
  },

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