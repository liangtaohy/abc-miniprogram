const Words = require("../../db/words");
const Entries = require("../../templates/entries");

const NEXT_PAGE_PATH = "index";

Page({
	data: {
		entries: [
			{id: 1, query: "abc", cover: "", comment: "字母类"}
		]
	},

	/**
	 * 生命周期函数--加载完成
	 */
	onLoad: function (options) {
		let db = options.db || "AnimalsDb";

		for (var i = Words[db].length - 1; i >= 0; i--) {
			Words[db][i].comment = Words[db][i].zh;
			Words[db][i].query = "word=" + Words[db][i].name + "&current=" + i + "&db=" + db;
		}

		console.log("onLoad");
		this.entries = new Entries(this, NEXT_PAGE_PATH);
		this.setData({entries: Words[db]});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		console.log("onReady");
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		console.log("onShow");
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		console.log("onHide");
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		console.log("onUnload");
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		console.log("onPullDownRefresh");
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		console.log("onReachBottom");
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function (res) {
		console.log("onShareAppMessage:");
		console.log(res);
	}
})