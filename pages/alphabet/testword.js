const Word = require("../../templates/word");

Page({
	data: {
    	imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537184875210&di=6f6167b4f63b3142ec797d4685936177&imgtype=0&src=http%3A%2F%2Fimg1.sc115.com%2Fuploads%2Fsc%2Fjpg%2FHD%2F33%2F4036.jpg',
    	isPlay: false,
    	color: '',
    	word: 'apple',
    	pronounce: '美 [ˈæpəl]',
    	audio: 'https://fanyi.baidu.com/gettts?lan=en&text=apple&spd=3&source=web',
    	image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537184875210&di=6f6167b4f63b3142ec797d4685936177&imgtype=0&src=http%3A%2F%2Fimg1.sc115.com%2Fuploads%2Fsc%2Fjpg%2FHD%2F33%2F4036.jpg'
	},
	onLoad: function (options) {
		console.log(options);

		for(let key in options) {
			options[key] = decodeURIComponent(options[key]);
		}
		this.word = new Word(this);
		this.setData({...options});
	}
})