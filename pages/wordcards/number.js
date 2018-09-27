// pages/wordcards/number.js
const CanvasID = "stage";
const Colors = ["#FF0000", "#0000FF", "#00FF00", "#FFA500", "#FFFF00", "#A020F0", "#A52A2A", "#FFC0CB", "#9C9C9C"]
const { NumbersDb } = require("../../db/words");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        number: 1,
        name: 'one'
    },

    drawNumber: function () {
        let sys = wx.getSystemInfoSync();
        let wHeight = sys.windowHeight;
        let wWidth = sys.windowWidth;
        let cx = wWidth / 2;
        let cy = wHeight / 2 - 100;
        let pixelRatio = sys.pixelRatio;
        let degree = 40; // 旋转弧度

        let number = this.data.number;

        let r1 = 120;

        this.context.translate(cx, cy);
        this.context.beginPath();
        this.context.setFontSize(100);

        for (let i = 0; i < 9; i++) {
            this.context.arc(r1, 0, r1 * 0.10, 0, 2*Math.PI, false);
            if (i < number) {
                this.context.setFillStyle("#000000");
                this.context.fill();
            } else {
                this.context.stroke();
            }
            this.context.rotate(degree * Math.PI/180);
        }

        this.context.setFillStyle("#000000");
        this.context.fillText(number, -25, 30);
        
        this.context.draw();
    },

    touchStart: function (e) {
        console.log(e);
    },

    touchMove: function (e) {
        console.log(e);
    },

    touchEnd: function (e) {
        console.log(e);
        let number = this.data.number;

        number++;
        if (number >9) {
            number = 1;
        }

        this.setData({number, name: NumbersDb[number - 1].name});
        this.drawNumber();
    },

    play: function (e) {
        console.log(e);
        this.audio.src = e.currentTarget.dataset.src;
        this.audio.play();
        this.setData({ isPlay: true, color: 'red' });
    },

    onAudioEnded: function (e) {
        console.log(e);
        this.setData({ isPlay: false, color: '' });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("onLoad");
        let number = options.number || 1;
        this.audio = wx.createInnerAudioContext();
        this.audio.onEnded(this.onAudioEnded);
        this.setData({number});
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function (e) {
        console.log("onReady");
        this.context = wx.createCanvasContext(CanvasID);
        this.drawNumber();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("onShow")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("onHide")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log("onUnload")
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log("onPullDownRefresh")
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log("onReachBottom")
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log("onShareAppMessage")
    }
})