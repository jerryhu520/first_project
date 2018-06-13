// pages/music_list/music_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[],
    IP:'http://172.20.10.3'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: this.data.IP+':3333/music_list/find', //仅为示例，并非真实的接口地址
        data: {
          _id: this.options.musicID,
          submitType: "findJoin",
          ref: ['music', '']
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: ( (res)=> {
          this.setData({
            musicList: res.data.music
          })
          console.log(this.data.musicList)
          
        })
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