// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList:['吃饭','睡觉','玩游戏'],
    newItem:'',
  },

  tapAdd(){
    let newItem = this.data.newItem.trim()
    if(newItem){
      this.data.todoList.push(newItem)
      this.setData({
        todoList:this.data.todoList,
        newItem:'',
      })
    }

    wx.showToast({
      title: '添加成功',
      icon:'success',
      duration:1000,
      mask:true,
    })
  },

  inputNewItem(event){
    this.setData({
      newItem:event.detail.value.trim()
    })
  },

  tapDel(event){
    wx.showModal({
      cancelColor: '#f00',
      confirmText:'残忍删除',
      cancelText:'我再想想',
      cancelColor:'#666',
      content:'确认删除吗？',
      success:(res)=>{
        // console.log(res)
        if(res.confirm){
          let index = event.target.dataset.index
          this.data.todoList.splice(index,1)
          this.setData({
            todoList:this.data.todoList,
          })
        }
      },
      fail:(err)=>{
        console.warn(err)
      }
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