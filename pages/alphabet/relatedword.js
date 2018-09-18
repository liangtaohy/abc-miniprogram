// pages/alphabet/relatedword.js
//引入图片预加载组件
const ImgLoader = require('../../imgloader/img-loader.js');
const { loading } = require('../../config.js');
const app = getApp();

const innerAudioCtx = wx.createInnerAudioContext();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    isPlay: false,
    word: 'apple',
    pronounce: '美 [ˈæpəl]',
    audio: 'https://fanyi.baidu.com/gettts?lan=en&text=apple&spd=3&source=web',
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537184875210&di=6f6167b4f63b3142ec797d4685936177&imgtype=0&src=http%3A%2F%2Fimg1.sc115.com%2Fuploads%2Fsc%2Fjpg%2FHD%2F33%2F4036.jpg'
  },

  play: function (e) {
    innerAudioCtx.src = e.currentTarget.dataset.src;
    innerAudioCtx.play();
    this.setData({ isPlay: true });
  },

  onAudioEnded: function (e) {
    console.log(e);
    this.setData({ isPlay: false });
  },

  imageLoadedError: function (e) {
    console.log(e);
  },

  imageLoaded: function (e) {
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    for(let key in options) {
      options[key] = decodeURIComponent(options[key]);
    }

    this.imgLoader = new ImgLoader(this);
    
    this.setData({...options, imgUrl: loading});
    innerAudioCtx.onEnded(this.onAudioEnded);

    this.imgLoader.load(options.image, (err, data) => {
      console.log('图片加载完成', err, data.src)
      this.setData({ msg: '大图加载完成~' })

      if (!err)
        this.setData({ imgUrl: data.src })
    });
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