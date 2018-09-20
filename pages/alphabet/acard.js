const { buildQueryString } = require("../../utils/util");

const app = getApp();
const ipa = app.globalData.ipa;
const relatedWords = app.globalData.relatedWords;

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
		this.innerAudioCtx = wx.createInnerAudioContext();
		this.innerAudioCtx.onPlay(() => {
			console.log('play');
		});
		this.innerAudioCtx.onEnded(this.ended);
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

	ended: function (e) {
		console.log(e);
		this.setData({ isPlay: false, color: '' });
	},

	play: function (e) {
		this.innerAudioCtx.src = e.currentTarget.dataset.src;
		this.innerAudioCtx.play();
		this.setData({ isPlay: true, color: 'red' });
	},
});