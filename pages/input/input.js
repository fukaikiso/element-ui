// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',  // 绑定用户名
    age: '',
    money: '',
    idcard: '',
    pwd: '', // 绑定密码框
    repwd: '', // 绑定确认密码
  },

  inputRepwd(event){
    this.setData({
      repwd: event.detail.value
    })
  },

  // event：小程序封装的事件对象，里面封装事件相关的属性
  inputPwd(event){
    let val = event.detail.value
    console.log(val)
    // 更新Data
    this.setData({
      pwd: val   // 把 val的值 存入 data.pwd变量
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