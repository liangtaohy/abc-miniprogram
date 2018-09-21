class Word {
	constructor(pageContext) {
		// set parent page context
		this.page = pageContext;

		// create audio context
		this.audio = wx.createInnerAudioContext();

		// bind this for methods
		this.page.play = this.play.bind(this);

		this.audio.onEnded(this.onAudioEnded.bind(this));
	}

	onAudioEnded (e) {
		console.log(e);
		this.page.setData({ isPlay: false, color: '' });
	}

	play(e) {
		console.log(e);
		this.audio.src = e.currentTarget.dataset.src;
    	this.audio.play();
    	this.page.setData({ isPlay: true, color: 'red' });
	}
}

module.exports = Word;