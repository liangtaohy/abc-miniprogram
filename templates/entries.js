class Entries {
	constructor(pageContext, nextpage) {
		this.page = pageContext;
		this.page.entrytap = this.entrytap.bind(this);
		this.nextpage = nextpage;
	}

	entrytap(e) {
		console.log(e);
		let params = e.currentTarget.dataset.query;

		wx.navigateTo({
			url: this.nextpage + '?' + params
		});
	}
}

module.exports = Entries;