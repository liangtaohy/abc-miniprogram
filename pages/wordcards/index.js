// pages/wordcards/index.js
const Words = require("../../db/words");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0
    },

    play: function (e) {
        console.log(e);
        this.audio.src = e.currentTarget.dataset.src;
        this.audio.play();
        this.setData({ isPlay: true, color: 'red' });
    },

    onAudioEnded: function (e) {
        console.log(e);
        this.setData({ isPlay: false, color: '' });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let db = Words[options.db || "AnimalsDb"];
        let current = options.current;

        this.setData({db:db, current: current});

        this.audio = wx.createInnerAudioContext();
        this.audio.onEnded(this.onAudioEnded);
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