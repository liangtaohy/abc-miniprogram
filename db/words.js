let FruitWordDb = [
	{id:1, name: "cherry", pronounce: "美 [ˈtʃɛri]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1537500065&di=192a6a3551e8c296f3c0266465c8e489&src=http://pic11.photophoto.cn/20090519/0035035504458180_b.jpg"},
	{id:2, name: "apple", pronounce: "美 [ˈæpəl]", cover: "http://imgsrc.baidu.com/baike/pic/item/8b82b9014a90f6033d0618cc3f12b31bb151ed83.jpg"},
	{id:3, name: "pear", pronounce: "美 [per]", cover: "http://imgsrc.baidu.com/baike/pic/item/e7cd7b899e510fb34ca2d8e2d033c895d1430c0f.jpg"},
	{id:4, name: "banana", pronounce: "美 [bəˈnænə]", cover: "http://imgsrc.baidu.com/baike/pic/item/5d6034a85edf8db12c69f8ef0f23dd54574e74f2.jpg"},
	{id:5, name: "grape", pronounce: "美 [ɡrep]", cover: "http://imgsrc.baidu.com/baike/pic/item/060828381f30e9243009210347086e061d95f757.jpg"},
	{id:6, name: "peach", pronounce: "美 [pitʃ]", cover: "http://imgsrc.baidu.com/baike/pic/item/9213b07eca80653861b96ab497dda144ac3482c2.jpg"},
	{id:7, name: "orange", pronounce: "美 [ˈɔ:rɪndʒ]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537557403108&di=a8900cd4c405db4ac180e6c160da07cf&imgtype=0&src=http%3A%2F%2Fcrawler-fs.intsig.net%2Fcamfs%2Fdownload%3Ffilename%3D10005_c0bd0a21e9dae6a3ffbc7adf9a58405c_avatar.jpeg"},
	{id:8, name: "watermelon", pronounce: "美 [ˈwɔ:tərmelən]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537557509999&di=78c6141465ceed91119662160c45fbd6&imgtype=0&src=http%3A%2F%2Fimg.frbiz.com%2Fpic%2Fz1dca328-0x0-1%2Fwatermelon_stripped_leopard_seedless.jpg"},
	{id:9, name: "tomato", pronounce: "美 [təˈmeɪtoʊ]", cover: "http://imgsrc.baidu.com/baike/pic/item/a50f4bfbfbedab6452b8e450f036afc378311e53.jpg"},
	{id:10, name: "pineapple", pronounce: "美 [ˈpaɪnˌæpəl]", cover: "http://imgsrc.baidu.com/baike/pic/item/b219ebc4b74543a941fbf6af1c178a82b80114f4.jpg"},
	{id:11, name: "cherry", pronounce: "美 [ˈtʃɛri]", cover: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3171121872,4139991064&fm=26&gp=0.jpg"},
	{id:12, name: "Coconut", pronounce: "美 [ˈkoʊkənʌt]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537635758095&di=dac72211b1a7a53ce3b8a7a35e2c0ff2&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FLzFsC9J2A3jXDUAX1J6P2n0TIeI09R_EH16BK9nd9bgg4-GAUftD83UEScYCeK-UTYGVDmosZWTLal1WbWRW3A.jpg"},
	{id:13, name: "Blueberry", pronounce: "美 [ˈblu:beri]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537636572174&di=2a848d2136c2a45fccbf3261d19f54d4&imgtype=0&src=http%3A%2F%2Fsrc.onlinedown.net%2Fsupply%2F170210_logo%2FBlueberry.jpg"},
	{id:14, name: "Cumquat", pronounce: "美 ['kʌmˌkwɒt]", cover: "http://imgsrc.baidu.com/baike/pic/item/eaf81a4c510fd9f93e943bfa2f2dd42a2934a4a6.jpg"},
	{id:15, name: "Fig", pronounce: "美 [fɪɡ]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537637242850&di=70888a94d1792d43e1e64a0374f43cdc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4d086e061d950a7bd82747ff01d162d9f2d3c9ff.jpg"},
	{id:16, name: "Filbert", zh: "榛果;榛树，榛子", pronounce: "美 [ˈfɪlbərt]", cover: "http://imgsrc.baidu.com/baike/pic/item/a5c27d1ed21b0ef456d7d0f1d7c451da81cb3e65.jpg"},
	{id:17, name: "Haw", zh: "山楂", pronounce: "美 [hɔ]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537637501876&di=1584a232dcfbc453d835f173a486530e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161112%2F13a91b00827c46b2b4e721bdbfcc5509_th.jpg"},
	{id:18, name: "Kiwifruit", zh: "猕猴桃", pronounce: "美 [kɪwɪf'ru:t]", cover: "http://imgsrc.baidu.com/baike/pic/item/203fb80e7bec54e7ecdfb3b8b3389b504fc26a61.jpg"},
	{id:19, name: "Lemon", zh: "柠檬", pronounce: "美 [ˈlɛmən]", cover: "http://imgsrc.baidu.com/baike/pic/item/908fa0ec08fa513d5e27f61e376d55fbb3fbd965.jpg"},
	{id:20, name: "Lichee", zh: "荔枝", pronounce: "美 [ˌlaɪ'tʃi:]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538234734&di=181963620ceb6459026118dda0147967&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tradekey.com%2Fimages%2Fuploadedimages%2Fproducts%2F2%2F7%2F2653715-20170830080327.jpg"},
	{id:21, name: "Longan", zh: "龙眼;桂圆", pronounce: "美 ['lɒŋgən]", cover: "http://imgsrc.baidu.com/baike/pic/item/d788d43f8794a4c252924a6404f41bd5ac6e39cf.jpg"},
	{id:22, name: "Mango", zh: "芒果", pronounce: "美 [ˈmæŋgoʊ]", cover: "http://imgsrc.baidu.com/baike/pic/item/fc1f4134970a304e9c266657dbc8a786c9175c13.jpg"},
	{id:23, name: "Nectarine", zh: "油桃", pronounce: "美 [ˌnɛktəˈrin]", cover: "http://imgsrc.baidu.com/baike/pic/item/574e9258d109b3de80fdae5ec7bf6c81800a4c41.jpg"},
	{id:24, name: "Betelnut", zh: "槟榔", pronounce: "美 ['bi:tlˌnʌt]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537640208664&di=fbe421274d8bbf77bf1e7374dcf6389a&imgtype=0&src=http%3A%2F%2Fimg1.99114.com%2Fgroup10%2FM00%2F5C%2FEB%2FrBADs1oRZ3iAeXnOAAcc2pJ38S0580.jpg"},
	{id:25, name: "papaya", zh: "木瓜", pronounce: "美 [pəˈpɑjə]", cover: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=659006201,3240472157&fm=26&gp=0.jpg"},
	{id:26, name: "plum", zh: "李子", pronounce: "美 [plʌm]", cover: "http://imgsrc.baidu.com/baike/pic/item/c9fcc3cec3fdfc038c7a7e33d23f8794a4c2263e.jpg"},
	{id:27, name: "pomegranate", zh: "石榴", pronounce: "美 [ˈpɑ:mɪgrænɪt]", cover: "http://imgsrc.baidu.com/baike/pic/item/5882b2b7d0a20cf4921b0f4f7c094b36adaf9993.jpg"},
	{id:28, name: "pomelo", zh: "柚子", pronounce: "美 [ˈpɑ:məloʊ]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537640448064&di=c3c55b34a6504735395e7efd729feafb&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150720%2F0035035532586629_b.jpg"},
	{id:29, name: "hami melon", zh: "哈密瓜", pronounce: "", cover: "http://imgsrc.baidu.com/baike/pic/item/8cb1cb1349540923e88531a09758d109b2de497b.jpg"},
	{id:30, name: "pitaya", zh: "火龙果", pronounce: "美 ['pɪtəjə]", cover: "http://imgsrc.baidu.com/baike/pic/item/48540923dd54564e8ab250deb9de9c82d0584f05.jpg"},
	{id:31, name: "sugarcane", zh: "甘蔗", pronounce: "美 [ˈʃʊɡɚˌken]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537641457344&di=70aa3c503c652d1151027f3760149b88&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F12%2F03%2F94%2F5904659eb7b64.png"},
	{id:32, name: "persimmon", zh: "柿子", pronounce: "美 [pərˈsɪmən]", cover: "http://imgsrc.baidu.com/baike/pic/item/63d0f703918fa0ec8ab4f29d2c9759ee3d6ddb2b.jpg"},
	{id:33, name: "mangosteen", zh: "山竹果", pronounce: "美 [ˈmæŋɡəˌstin]", cover: "http://imgsrc.baidu.com/baike/pic/item/c9fcc3cec3fdfc03747e0a6ede3f8794a5c226e6.jpg"},
	{id:34, name: "cucumber", zh: "黄瓜", pronounce: "美 [ˈkjuˌkʌmbɚ]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537641965909&di=b6ec5b18711a4739ddd6a28ae673cb53&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb03533fa828ba61e216ae3fb4b34970a314e5959.jpg"},
	{id:35, name: "loquat", zh: "枇杷", pronounce: "美 [ˈloʊkwɑ:t]", cover: "http://imgsrc.baidu.com/baike/pic/item/a1ec08fa513d2697328880cf5ffbb2fb4216d8cd.jpg"},
	{id:36, name: "Muskmelon", zh: "甜瓜;香甘瓜，香瓜", pronounce: "美 ['mʌskˌmelən]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537642431510&di=ff43e4b28e2347eb41b10c539ccbc7cb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D5127f8f148166d222c7a1dd42f5b6c9b%2F5ab5c9ea15ce36d3d1e5fc0a31f33a87e950b122.jpg"}
];

let VegetablesWordDb = [
	{id:1, name: "mushroom", zh: "蘑菇", pronounce: "美 [ˈmʌʃˌrum, -ˌrʊm]", cover: "http://imgsrc.baidu.com/baike/pic/item/b8389b504fc2d562713e6c98ee1190ef76c66c95.jpg"},
	{id:2, name: "onion", zh: "洋葱", pronounce: "美 [ˈʌnjən]", cover: "http://img.21food.com/20110609/descript/1306877462770.jpg"},
	{id:3, name: "garlic", zh: "大蒜;蒜头", pronounce: "美 [ˈgɑ:rlɪk]", cover: "http://imgsrc.baidu.com/baike/pic/item/4bed2e738bd4b31cb33f7ad784d6277f9e2ff85f.jpg"},
	{id:4, name: "Chinese cabbage", zh: "大白菜", pronounce: "美 [tʃaɪˈniz ˈkæbɪdʒ]", cover: "http://imgsrc.baidu.com/baike/pic/item/dcc451da81cb39db9d2ef423d9160924aa1830dc.jpg"},
	{id:5, name: "carrot", zh: "胡萝卜", pronounce: "美 [ˈkærət]", cover: "http://imgsrc.baidu.com/baike/pic/item/72f082025aafa40f4e421973a164034f79f01993.jpg"},
	{id:6, name: "black fungus", zh: "黑木耳", pronounce: "美 [blæk ˈfʌŋɡəs]", cover: "http://00f3c1b4.sohunewsclientpic.imgcdn.sohucs.com/img8/wb/smccloud/2014/05/31/1401509315531.jpg"},
	{id:7, name: "spinach", zh: "菠菜", pronounce: "美 [ˈspɪnɪtʃ]", cover: "http://imgsrc.baidu.com/baike/pic/item/54fbb2fb43166d22d449b3044c2309f79052d260.jpg"},
	{id:8, name: "potato", zh: "马铃薯", pronounce: "美 [pəˈteɪtoʊ]", cover: "http://imgsrc.baidu.com/baike/pic/item/72f082025aafa40f52d92e3ca864034f78f01937.jpg"},
	{id:9, name: "eggplant", zh: "茄子", pronounce: "美 [ˈegplænt]", cover: "http://img.xxjcy.com/pic/z1f54e8d-0x0-1/vegetables_eggplant_purple_princess.jpg"},
	{id:10, name: "lettuce", zh: "莴苣，生菜", pronounce: "美 [ˈlɛtəs]", cover: "http://imgsrc.baidu.com/baike/pic/item/80cb39dbb6fd5266cdb6b57fa818972bd407363f.jpg"},
	{id:11, name: "pepper", zh: "辣椒", pronounce: "美 [ˈpɛpɚ]", cover: "http://imgsrc.baidu.com/baike/pic/item/962bd40735fae6cd589124ea09b30f2442a70f17.jpg"},
	{id:12, name: "bitter gourd", zh: "苦瓜", pronounce: "美 [ˈbɪtɚ ɡɔrd]", cover: "http://imgsrc.baidu.com/baike/pic/item/6a600c338744ebf8f18f07add3f9d72a6159a7a2.jpg"},
	{id:13, name: "lotus root", zh: "藕", pronounce: "美 [ˈlotəs rut]", cover: "http://imgsrc.baidu.com/baike/pic/item/cdbf6c81800a19d84e16019239fa828ba61e4614.jpg"},
	{id:14, name: "pumpkin", zh: "南瓜", pronounce: "美 [ˈpʌmpkɪn, ˈpʌm-, ˈpʌŋ-]", cover: "http://imgsrc.baidu.com/baike/pic/item/08f790529822720ef1caed2873cb0a46f31fabd8.jpg"},
	{id:15, name: "yam", zh: "山药", pronounce: "美 [jæm]", cover: "http://img.frbiz.com/pic/z1bfc346-0x0-1/yam.jpg"},
	{id:16, name: "Toona sinensis", zh: "香椿", pronounce: "", cover: "http://map1.zw3e.com:8080/zw_news_map/550/2015042/1429152109312253970.jpg"},
	{id:17, name: "celery", zh: "芹菜", pronounce: "美 [ˈsɛləri]", cover: "http://imgsrc.baidu.com/baike/pic/item/0df3d7ca7bcb0a464bb639546863f6246a60afc3.jpg"},
	{id:18, name: "Towel gourd", zh: "丝瓜", pronounce: "美 [ˈtaʊəl ɡɔrd]", cover: "http://imgsrc.baidu.com/baike/pic/item/3812b31bb051f8195cc611dad0b44aed2f73e7bb.jpg"},
	{id:19, name: "Ginger", zh: "姜", pronounce: "美 [ˈdʒɪndʒɚ]", cover: "http://imgsrc.baidu.com/baike/pic/item/8326cffc1e178a82c2d234d5ff03738da877e8dd.jpg"},
	{id:20, name: "white gourd", zh: "冬瓜", pronounce: "美 [hwaɪt ɡɔrd]", cover: "http://www.huichihuihe.com/upfile/15037309762.jpg"},
	{id:21, name: "cauliflower", zh: "菜花", pronounce: "美 [ˈkɔ:liflaʊə(r)]", cover: "https://imgsrc.baidu.com/baike/pic/item/d31b0ef41bd5ad6e00febea58bcb39dbb6fd3c7e.jpg"},
	{id:22, name: "Lily", zh: "百合", pronounce: "美 ['lɪlɪ]", cover: "http://img07.tooopen.com/images/20170628/tooopen_sy_215023358257.jpg"}
];

let NumbersDb = [
	{number: 1, en: "one"},
	{number: 2, en: "tow"},
	{number: 3, en: "three"},
	{number: 4, en: "four"},
	{number: 5, en: "five"},
	{number: 6, en: "six"},
	{number: 7, en: "seven"},
	{number: 8, en: "eight"},
	{number: 9, en: "nine"},
	{number: 0, en: "zero"}
];

let ColorsDb = [
	{id: 1, name: "red", zh: "红", pronounce: "美 [rɛd]", cover: ""},
	{id: 2, name: "orange", zh: "橙", pronounce: "美 [ˈɔ:rɪndʒ]", cover: ""},
	{id: 3, name: "yellow", zh: "黄", pronounce: "美 [ˈjeloʊ]", cover: ""},
	{id: 4, name: "green", zh: "绿", pronounce: "美 [ɡrin]", cover: ""},
	{id: 5, name: "blue", zh: "蓝", pronounce: "美 [blu]", cover: ""},
	{id: 6, name: "purple", zh: "紫", pronounce: "美 [ˈpɜ:rpl]", cover: ""},
	{id: 7, name: "gray", zh: "灰", pronounce: "美 [ɡre]", cover: ""},
	{id: 8, name: "pink", zh: "粉", pronounce: "美 [pɪŋk]", cover: ""},
	{id: 9, name: "black", zh: "黑", pronounce: "美 [blæk]", cover: ""},
	{id: 10, name: "brown", zh: "棕", pronounce: "美 [braʊn]", cover: ""},
	{id: 11, name: "cyan", zh: "青", pronounce: "美 [ˈsaɪˌæn, -ən]", cover: ""},
	{id: 12, name: "silver", zh: "银", pronounce: "美 [ˈsɪlvɚ]", cover: ""},
	{id: 13, name: "tan", zh: "茶色;晒黑的皮色", pronounce: "美 [tæn]", cover: ""}
];

let StationerDb = [
	{id:0, name: "pen", zh: "笔", pronounce: "美 [pɛn]", cover: "http://img.frbiz.com/nimg/7f/23/f86591c447497018a862d8c8cb79-0x0-0/world_strong_style_color_b82220_map_strong_designed_metal_roller_pen_for_gift_promotion.jpg"},
	{id:0, name: "pencil", zh: "铅笔", pronounce: "美 [ˈpɛnsəl]", cover: "https://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5d3a803fd754564ef168ec7adbb7f6f7/9358d109b3de9c82c53645a36681800a19d8434e.jpg"},
	{id:0, name: "ruler", zh: "尺子", pronounce: "美 [ˈrulɚ]", cover: "http://worldartsme.com/images/ruler-clipart-1.jpg"},
	{id:0, name: "stapler", zh: "订书机", pronounce: "美 [ˈsteplɚ]", cover: "http://ec4.images-amazon.com/images/I/41gYza2GfWL.jpg"},
	{id:0, name: "eraser", zh: "橡皮擦,板擦", pronounce: "美 [ɪˈreɪsər]", cover: "http://img4.imgtn.bdimg.com/it/u=1351558437,1842047593&fm=26&gp=0.jpg"},
	{id:0, name: "pencil-case", zh: "铅笔盒", pronounce: "美 [ˈpɛnsəl kes]", cover: "http://imgsrc.baidu.com/baike/pic/item/d50735fae6cd7b89c96f8c0d052442a7d9330e38.jpg"},
	{id:0, name: "crayon", zh: "蜡笔", pronounce: "美 ['kreɪən]", cover: "http://pic.58pic.com/58pic/15/56/53/32258PICbWf_1024.png"},
	{id:0, name: "sharpener", zh: "卷笔刀", pronounce: "美 [ˈʃɑ:rpnə(r)]", cover: "http://images.onccc.com/i003/2014/10/18/49/big_b7d5f3c5cb7e6250c4a0ec7dd0660ad7.jpg"},
	{id:0, name: "clips", zh: "回旋针", pronounce: "", cover: "http://image4.suning.cn/uimg/b2c/newcatentries/0070088753-000000000149153406_4_800x800.jpg"},
	{id:0, name: "glue", zh: "胶水", pronounce: "美 [ɡlu]", cover: ""},
	{id:0, name: "scissors", zh: "剪刀", pronounce: "美 [ˈsɪzərz]", cover: "http://pic.58pic.com/58pic/15/57/05/12r58PICt6V_1024.png"},
	{id:0, name: ""}
];

let AnimalsDb = [
	{id:0, name: "dog", zh: "狗", pronounce: "美 [dɔ:g]", cover: "http://imgsrc.baidu.com/baike/pic/item/03087bf40ad162d973e0c9c217dfa9ec8b13cde6.jpg"},
	{id:0, name: "cat", zh: "猫", pronounce: "美 [kæt]", cover: "http://imgsrc.baidu.com/baike/pic/item/b2de9c82d158ccbfa4bb57cc13d8bc3eb03541c5.jpg"},
	{id:0, name: "fish", zh: "鱼", pronounce: "美 [fɪʃ]", cover: "https://img.25pp.com/uploadfile/app/icon/20160508/1462659942284493.jpg"},
	{id:0, name: "bird", zh: "鸟", pronounce: "美 [bɜ:rd]", cover: "http://img4.imgtn.bdimg.com/it/u=2927196502,2743857028&fm=26&gp=0.jpg"},
	{id:0, name: "lion", zh: "狮子", pronounce: "美 [ˈlaɪən]", cover: "http://imgsrc.baidu.com/baike/pic/item/060828381f30e9245f7487ae4a086e061c95f759.jpg"},
	{id:0, name: "tiger", zh: "老虎", pronounce: "美 [ˈtaɪɡɚ]", cover: "http://imgsrc.baidu.com/baike/pic/item/3b87e950352ac65c7ae3a5b4fbf2b21192138a17.jpg"},
	{id:0, name: "leopard", zh: "豹;美洲豹，金钱豹", pronounce: "美 [ˈlepərd]", cover: "http://imgsrc.baidu.com/baike/pic/item/38dbb6fd5266d016b99f8140942bd40734fa35d7.jpg"},
	{id:0, name: "panda", zh: "熊猫", pronounce: "美 [ˈpændə]", cover: "http://imgsrc.baidu.com/baike/pic/item/64380cd7912397dd8bd8ec805982b2b7d1a28794.jpg"},
	{id:0, name: "wolf", zh: "狼", pronounce: "美 [wʊlf]", cover: "http://imgsrc.baidu.com/baike/pic/item/37d3d539b6003af390a8476c312ac65c1038b6a8.jpg"},
	{id:0, name: "zebra", zh: "斑马", pronounce: "美 [ˈzibrə]", cover: "http://imgsrc.baidu.com/baike/pic/item/b3119313b07eca80baf3840d912397dda0448362.jpg"},
	{id:0, name: "camel", zh: "骆驼", pronounce: "美 [ˈkæməl]", cover: "http://imgsrc.baidu.com/baike/pic/item/c2cec3fdfc039245f12d49ea8e94a4c27c1e25be.jpg"},
	{id:0, name: "elephant", zh: "大象", pronounce: "美 [ˈɛləfənt]", cover: "http://img1.imgtn.bdimg.com/it/u=27467694,3346095025&fm=26&gp=0.jpg"},
	{id:0, name: "fox", zh: "狐狸", pronounce: "美 [fɑ:ks]", cover: "https://imgsrc.baidu.com/imgad/pic/item/0b55b319ebc4b7455263633fc4fc1e178a821527.jpg"},
	{id:0, name: "giraffe", zh: "长颈鹿", pronounce: "美 [dʒəˈræf]", cover: "http://img4.imgtn.bdimg.com/it/u=1797315255,974254519&fm=26&gp=0.jpg"},
	{id:0, name: "horse", zh: "马", pronounce: "美 [hɔ:rs]", cover: "http://imgsrc.baidu.com/baike/pic/item/d62a6059252dd42ad5a17a9f043b5bb5c9eab85e.jpg"},
	{id:0, name: "pig", zh: "猪", pronounce: "美 [pɪɡ]", cover: "https://imgsrc.baidu.com/baike/pic/item/960a304e251f95ca88a3f3fbc2177f3e6709522c.jpg"},
	{id:0, name: "monkey", zh: "猴子", pronounce: "美 [ˈmʌŋki]", cover: "http://imgsrc.baidu.com/baike/pic/item/43a7d933c895d143e0d8428478f082025baf07ee.jpg"},
	{id:0, name: "bat", zh: "蝙蝠", pronounce: "美 [bæt]", cover: "http://imgsrc.baidu.com/baike/pic/item/a8ec8a13632762d02434c7bca3ec08fa513dc6af.jpg"},
	{id:0, name: "kangaroo", zh: "袋鼠", pronounce: "美 [ˌkæŋɡəˈru]", cover: "https://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=d6c6fa378082b90129a0cb701be4c302/4b90f603738da9772028573bba51f8198618e39f.jpg"},
	{id:0, name: "squirrel", zh: "松鼠", pronounce: "美 [ˈskwɜ:rəl]", cover: "http://img4.imgtn.bdimg.com/it/u=1396031733,3874723817&fm=26&gp=0.jpg"},
	{id:0, name: "rabbit", zh: "兔子", pronounce: "美 [ˈræbɪt]", cover: "http://imgsrc.baidu.com/baike/pic/item/78310a55b319ebc4bf75b2aa8126cffc1e1716f7.jpg"},
	{id:0, name: "hippopotamus", zh: "河马", pronounce: "美 [ˌhɪpəˈpɑ:təməs]", cover: "http://news.k618.cn/xda/201304/W020130423270547420433.jpg"},
	{id:0, name: "dolphin", zh: "海豚", pronounce: "美 [ˈdɑ:lfɪn]", cover: "http://imgsrc.baidu.com/baike/pic/item/79f0f736afc379317537cb47e9c4b74543a91104.jpg"},
	{id:0, name: "whale", zh: "鲸", pronounce: "美 [hwel, wel] ", cover: "http://d.c-launcher.com/wallpaper/img/876/53fdcab7e4b0b03cd50651dc/1409141431337/wallpaper.jpg"},
	{id:0, name: "snail", zh: "蜗牛", pronounce: "美 [snel]", cover: "http://imgsrc.baidu.com/baike/pic/item/4b90f603738da97732e04737b851f8198718e3db.jpg"},
	{id:0, name: "frog", zh: "青蛙", pronounce: "美 [frɔ:g]", cover: "http://imgsrc.baidu.com/baike/pic/item/8d5494eef01f3a29348c935f9325bc315d607cde.jpg"},
	{id:0, name: "snake", zh: "蛇", pronounce: "美 [sneɪk] ", cover: "http://imgsrc.baidu.com/baike/pic/item/cdbf6c81800a19d82446bcad34fa828ba71e46d4.jpg"},
	{id:0, name: "lobster", zh: "龙虾", pronounce: "美 [ˈlɑ:bstə(r)]", cover: "http://img.mp.sohu.com/upload/20170518/b12ac93822544651bd7a3cb025aabf6b_th.png"},
	{id:0, name: "crab", zh: "蟹", pronounce: "美 [kræb]", cover: "http://imgsrc.baidu.com/baike/pic/item/64380cd7912397dd8161ef725082b2b7d0a287af.jpg"},
	{id:0, name: "worm", zh: "蚯蚓", pronounce: "美 [wɜ:rm]", cover: "http://imgsrc.baidu.com/baike/pic/item/4610b912c8fcc3cee69d67bb9845d688d53f20dc.jpg"},
	{id:0, name: "chick", zh: "小鸡", pronounce: "美 [tʃɪk]", cover: "http://imgsrc.baidu.com/baike/pic/item/7c1ed21b0ef41bd50505f9e158da81cb39db3d54.jpg"},
	{id:0, name: "duck", zh: "鸭子", pronounce: "美 [dʌk]", cover: "https://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=d0bd82c65d2c11dfcadcb7600b4e08a5/a8ec8a13632762d04567e19aaaec08fa513dc6be.jpg"},
	{id:0, name: "goose", zh: "鹅", pronounce: "美 [ɡus]", cover: "http://img1.imgtn.bdimg.com/it/u=240909604,2927509449&fm=26&gp=0.jpg"},
	{id:0, name: "spider", zh: "蜘蛛", pronounce: "美 [ˈspaɪdɚ]", cover: "http://imgsrc.baidu.com/baike/pic/item/cefc1e178a82b901ffaabaf1718da9773812efe9.jpg"},
	{id:0, name: "ant", zh: "蚂蚁", pronounce: "美 [ænt]", cover: "http://imgsrc.baidu.com/baike/pic/item/a005b334fde10787d0a2d3b1.jpg"},
	{id:0, name: "bee", zh: "蜜蜂", pronounce: "美 [bi]", cover: "http://imgsrc.baidu.com/baike/pic/item/a2cc7cd98d1001e9e3d3b6b3b20e7bec55e7979b.jpg"},
	{id:0, name: "penguin", zh: "企鹅", pronounce: "美 [ˈpɛŋɡwɪn, ˈpɛn-]", cover: "http://imgsrc.baidu.com/baike/pic/item/a6efce1b9d16fdfa613e4dcfb78f8c5494ee7b45.jpg"},
	{id:0, name: "peacock", zh: "孔雀", pronounce: "美 [ˈpi:kɑ:k]", cover: "http://imgsrc.baidu.com/baike/pic/item/f9198618367adab4ce62513880d4b31c8701e41f.jpg"},
	{id:0, name: "butterfly", zh: "蝴蝶", pronounce: "美 [ˈbʌtərflaɪ]", cover: "http://imgsrc.baidu.com/baike/pic/item/09fa513d269759ee610b8179b1fb43166d22df2d.jpg"},
	{id:0, name: "dragonfly", zh: "蜻蜓", pronounce: "美 [ˈdræɡənˌflaɪ]", cover: "http://imgsrc.baidu.com/baike/pic/item/730e0cf3d7ca7bcb021dc2bdb4096b63f624a839.jpg"},
	{id:0, name: "eagle", zh: "老鹰", pronounce: "美 [ˈiɡəl]", cover: "http://imgsrc.baidu.com/baike/pic/item/0bd162d9f2d3572ca74ac3ef8d13632762d0c35d.jpg"},
	{id:0, name: "owl", zh: "猫头鹰", pronounce: "美 [aʊl]", cover: "http://imgsrc.baidu.com/baike/pic/item/adaf2edda3cc7cd98b9d6dea3e01213fb80e9154.jpg"},
	{id:0, name: "seal", zh: "海豹", pronounce: "美 [sil]", cover: "https://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=6ce7a4b9ae0f4bfb98dd96176b261285/faedab64034f78f019d351d573310a55b3191c38.jpg"},
	{id:0, name: "dove", zh: "鸽子", pronounce: "美 [dʌv]", cover: "https://imgsrc.baidu.com/imgad/pic/item/7e3e6709c93d70cfdb1c4a29f2dcd100baa12b34.jpg"},
	{id:0, name: "ostrich", zh: "鸵鸟", pronounce: "美 [ˈɑ:strɪtʃ]", cover: "http://imgsrc.baidu.com/baike/pic/item/0ff41bd5ad6eddc43cf1e0bd30dbb6fd52663365.jpg"},
	{id:0, name: "donkey", zh: "毛驴", pronounce: "美 [ˈdɑ:ŋki]", cover: "http://imgsrc.baidu.com/baike/pic/item/94cad1c8a786c917dfc975a6c03d70cf3ac75762.jpg"},
	{id:0, name: "grasshopper", zh: "蚱蜢", pronounce: "美 [ˈgræshɑ:pə(r)]", cover: "http://imgsrc.baidu.com/baike/pic/item/48540923dd54564e37292fb9b3de9c82d0584fe6.jpg"},
	{id:0, name: "Dinosaur", zh: "恐龙", pronounce: "美 [ˈdaɪnəˌsɔr]", cover: "http://imgsrc.baidu.com/baike/pic/item/b21c8701a18b87d6a57814840e0828381f30fd77.jpg"},
	{id:0, name: "shrimp", zh: "虾", pronounce: "美 [ʃrɪmp]", cover: "http://imgsrc.baidu.com/baike/pic/item/0eb30f2442a7d9330398ca48ae4bd11373f001dc.jpg"}
];

let TransportationDb = [
	{id:0, name: "Bicycle", zh: "自行车", pronounce: "美 [ˈbaɪsɪkl]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537987629778&di=8e3f6c8d7d7470992ebc05e3e875d746&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2437549599%2C4209829176%26fm%3D214%26gp%3D0.jpg"},
	{id:0, name: "taxi", zh: "出租车", pronounce: "美 [ˈtæksi]", cover: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1956194174,3174202337&fm=26&gp=0.jpg"},
	{id:0, name: "Scooter", zh: "滑板车", pronounce: "美 [ˈskutɚ]", cover: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2643165915,151055753&fm=26&gp=0.jpg"},
	{id:0, name: "vehicle", zh: "", pronounce: "", cover: ""},
	{id:0, name: "ship", zh: "", pronounce: "", cover: ""},
	{id:0, name: "motorcycle", zh: "摩托车", pronounce: "美 [ˈmoʊtərsaɪkl]", cover: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2724725557,2927685458&fm=26&gp=0.jpg"},
	{id:0, name: "train", zh: "火车", pronounce: "美 [tren]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537988135648&di=da5eb66896332ff1cf235ad752c3afa4&imgtype=0&src=http%3A%2F%2Fcdn.ipernity.com%2F200%2F36%2F48%2F43303648.70e059b8.640.jpg%3Fr2"},
	{id:0, name: "bus", zh: "公共汽车", pronounce: "美 [bʌs]", cover: "http://imgsrc.baidu.com/baike/pic/item/6d81800a19d8bc3e12ac34aa818ba61ea8d3452d.jpg"},
	{id:0, name: "car", zh: "汽车", pronounce: "美 [kɑr]", cover: "http://imgsrc.baidu.com/baike/pic/item/37d12f2eb9389b500c6deccc8d35e5dde6116e99.jpg"},
	{id:0, name: "plane", zh: "飞机", pronounce: "美 [plen]", cover: "http://imgsrc.baidu.com/baike/pic/item/faf2b2119313b07e5923b5660fd7912396dd8cc6.jpg"},
	{id:0, name: "truck", zh: "货车", pronounce: "美 [trʌk]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537987919618&di=c16c80ae0b62c16afacb9acc9c6d1adf&imgtype=0&src=http%3A%2F%2Fimg.frbiz.com%2Fnimg%2F2e%2F62%2Fb79477ab836edeb856e91d9c1801-0x0-1%2F4_ton_light_dump_truck.jpg"},
	{id:0, name: "police car", zh: "警车", pronounce: "美 [pəˈlis kɑr]", cover: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2491938402,3677278119&fm=26&gp=0.jpg"},
	{id:0, name: "van", zh: "厢式货车", pronounce: "美 [væn]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537987999591&di=119de5ad8cda1647df7cc9fed34b83cd&imgtype=0&src=http%3A%2F%2Fimg.tradekey.com%2Fp-7049277-20131127121509%2Fdamas-ii-deluxe-fullvan.jpg"},
	{id:0, name: "sailboat", zh: "帆船", pronounce: "美 [ˈseɪlboʊt]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537987540357&di=d01733e7789b52c47ea423d25ab061ad&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F001TCnN9zy74UuUfaNK7c%26690"},
	{id:0, name: "excavator", zh: "挖掘机", pronounce: "美 [ˈɛkskəˌvetɚ]", cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537987477171&di=d87b566f45ef4dca8cd08a9466da7f96&imgtype=0&src=http%3A%2F%2Fimage3.cccme.org.cn%2Fi_supply%2F13-11-22%2F13112210100593.jpg"}
];

module.exports = {
	AnimalsDb: AnimalsDb,
	StationerDb: StationerDb,
	ColorsDb: ColorsDb,
	VegetablesWordDb: VegetablesWordDb,
	FruitWordDb: FruitWordDb,
	TransportationDb: TransportationDb
}