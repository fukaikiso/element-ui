// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer: '',
    answer2: '',
    accesslator:'',
    city:'',
    date:'',
    country:'',
    cs:['中国','日本','韩国','美国'],
  },
  changeCountry(event){
    console.log(event.detail.value)
    this.setData({
      country:event.detail.value
    })
  },

  changeRegion(event){
    console.log(event.detail.value)
    this.setData({
      city:event.detail.value
    })
  },

  changeDate(event){
    console.log(event.detail.value)
    this.setData({
      date:event.detail.value
    })
  },

  changeRadio(event){ // 当切换单选选中项时触发
    console.log(event.detail.value)
    this.setData({
      answer: event.detail.value
    })
  },

  changeCheckbox(event){
    console.log(event.detail.value)
    this.setData({
      answer2:event.detail.value.sort()
    })
  },
  changeSwitch(event){
    console.log(event.detail.value)
    this.setData({
      accesslator:event.detail.value ? '开启':'关闭'
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