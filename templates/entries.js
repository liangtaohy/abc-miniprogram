class Entries {
	constructor(pageContext, nextpage) {
		this.page = pageContext;
		this.page.entrytap = this.entrytap.bind(this);
		this.nextpage = nextpage;
	}

	entrytap(e) {
		console.log(e);
		let params = e.currentTarget.dataset.query;
		let nextpage = e.currentTarget.dataset.nextpage || this.nextpage;
		wx.navigateTo({
			url: nextpage + '?' + params
		});
	}
}

module.exports = Entries;