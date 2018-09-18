const app = getApp();

Page({
	data: {
		bigAlphabets: [
			'A', 'B', 'C', 'D', 'E', 'F', 'G',
			'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T',
			'U', 'V', 'W', 'X', 'Y', 'Z'
		],
		indexes: [
			0,1,2,3,4,5,6
		],
		tappedAlphabets: {},
	},

	onLoad: function() {
		console.log("onLoad enter");
	},

	goCardBox: function(e) {
		console.log(e);
		let a = e.currentTarget.dataset.alphabet;

		if (this.data.tappedAlphabets.hasOwnProperty(a)) {
			this.data.tappedAlphabets[a]++;
		} else {
			this.data.tappedAlphabets[a] = 1;
		}

		wx.navigateTo({
			url: 'acard?alphabet=' + a
		})
	}
});