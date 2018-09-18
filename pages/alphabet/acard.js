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
		console.log(option);

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

		console.log(index, cur);

		let options = relatedWords[cur][index];

		console.log(options);

		let querystring = buildQueryString(options);

		console.log(querystring);

		wx.navigateTo({
			url: 'relatedword?' + querystring
		});
	},

	audioPlay: function () {
		this.audioCtx.play();
		this.setData({ isPlay: true, color: 'red' });
	},

	audioEnded: function (e) {
		console.log(e);
		this.audioCtx.seek(0);
		this.setData({ isPlay: false, color: '' });
	},

	play: function (e) {
		innerAudioCtx.src = e.currentTarget.dataset.src;
		innerAudioCtx.play();
		console.log(innerAudioCtx.duration);
		console.log(e.currentTarget.dataset.src);
		this.setData({ isPlay: true });
	},

	stop: function (e) {
		innerAudioCtx.pause();
		this.setData({ isPlay: false });
	}
});