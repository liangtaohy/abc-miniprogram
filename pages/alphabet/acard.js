const { buildQueryString } = require("../../utils/util");

const app = getApp();
const ipa = app.globalData.ipa;
const relatedWords = app.globalData.relatedWords;

const innerAudioCtx = wx.createInnerAudioContext();

Page({
	data: {
		cur: 'A',
		isPlay: false,
		color:''
	},

	onLoad: function(option) {
		this.setData({
			cur: option.alphabet,
			ipa,
			relatedWords
		});
	},

	onReady: function (e) {
		// 使用 wx.createAudioContext 获取 audio 上下文 context
		this.audioCtx = wx.createAudioContext('myAudio');
	},

	seeword: function (e) {
		let index = e.currentTarget.dataset.index;
		let cur = e.currentTarget.dataset.cur;

		let options = relatedWords[cur][index];

		let querystring = buildQueryString(options);

		wx.navigateTo({
			url: 'relatedword?' + querystring
		});
	},

	audioPlay: function () {
		this.audioCtx.play();
		this.setData({ isPlay: true, color: 'red' });
	},

	audioEnded: function (e) {
		this.audioCtx.seek(0);
		this.setData({ isPlay: false, color: '' });
	},

	play: function (e) {
		innerAudioCtx.src = e.currentTarget.dataset.src;
		innerAudioCtx.play();
		this.setData({ isPlay: true });
	},

	stop: function (e) {
		innerAudioCtx.pause();
		this.setData({ isPlay: false });
	}
});