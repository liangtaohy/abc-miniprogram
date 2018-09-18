//app.js
var config = require('./config')
var constants = require('./constants')

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code
        wx.getUserInfo({
            success: userinforesult => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = userinforesult.userInfo

              console.log(userinforesult)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(userinforesult)
              }

              wx.request({
                url: config.service.loginUrl,
                method: 'GET',
                header: {
                  [constants.WX_HEADER_CODE]: res.code,
                  [constants.WX_HEADER_ENCRYPTED_DATA]: userinforesult.encryptedData,
                  [constants.WX_HEADER_IV]: userinforesult.iv
                },
                success (result) {
                  wx.setStorageSync('logs', result)
                  console.log(result)
                }
              })
            }
          })
      },
      fail: error => {
        console.log(error)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    ipa: {
      'A': {
        'pronounce':'美 [eɪ]'
      },
      'B': {
        'pronounce':'英 [bi:]'
      },
      'C': {
        'pronounce':'美 [si:]'
      },
      'D': {
        'pronounce':'美 [di:] '
      },
      'E': {
        'pronounce':'美 [i:] '
      },
      'F': {
        'pronounce':'美 [ef] '
      },
      'G': {
        'pronounce':'美 [dʒi:] '
      },
      'H': {
        'pronounce':'美 [eɪtʃ] '
      },
      'I': {
        'pronounce':'美 [aɪ] '
      },
      'J': {
        'pronounce':'英 [dʒeɪ]'
      },
      'K': {
        'pronounce':'英 [keɪ] '
      },
      'L': {
        'pronounce':'英 [el] '
      },
      'M': {
        'pronounce':'美 [ɛm] '
      },
      'N': {
        'pronounce':'英 [en] '
      },
      'O': {
        'pronounce':'美 [oʊ] '
      },
      'P': {
        'pronounce':'美 [pi:] '
      },
      'Q': {
        'pronounce':'美 [kju:] '
      },
      'R': {
        'pronounce':'英 [ɑ:(r)] '
      },
      'S': {
        'pronounce':'英 [es] '
      },
      'T': {
        'pronounce':'美 [ti:] '
      },
      'U': {
        'pronounce':'美 [ju:] '
      },
      'V': {
        'pronounce':'美 [vi:] '
      },
      'W': {
        'pronounce':'英 [ˈdʌblju:] '
      },
      'X': {
        'pronounce':'美 [eks] '
      },
      'Y': {
        'pronounce':'美 [waɪ]'
      },
      'Z': {
        'pronounce':'美 [zi:] '
      },
    },
    relatedWords: {
      'A': [
        {
          'word': 'apple',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537258157277&di=171a892641a4ddeaabb111deb49ab238&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e52c58e5e533a801219c77173300.png',
          'pronounce': '美 [ˈæpəl]',
          'audio': 'https://fanyi.baidu.com/gettts?lan=en&text=apple&spd=3&source=web'
        },
        {
          'word': 'hat',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537257674682&di=3eadd4d6bd5c28880eb2ac6557e137fd&imgtype=0&src=http%3A%2F%2Fimg.frbiz.com%2Fnimg%2F34%2Fad%2F4abb067039e5436e3c53fc4d5b7c-0x0-0%2Fstrong_style_color_b82220_straw_strong_fedora_hat.jpg',
          'pronounce': '美 [hæt] ',
          'audio': 'https://fanyi.baidu.com/gettts?lan=en&text=hat&spd=3&source=web'
        },
        {
          'word': 'cat',
          'image': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=517208126,2253276569&fm=26&gp=0.jpg',
          'pronounce': '美 [ˈæpəl]',
          'audio': 'https://fanyi.baidu.com/gettts?lan=uk&text=apple&spd=3&source=web'
        },
        {
          'word': 'nap',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537258339032&di=79f2d65cb91ae93ccd7be25c44baf720&imgtype=0&src=http%3A%2F%2Fi2.wp.com%2Fmonkeyabroad.com%2Fwp-content%2Fuploads%2F2013%2F01%2Fnap1.jpg%3Ffit%3D800%2C492',
          'pronounce': '美 [hæt] ',
          'audio': 'https://fanyi.baidu.com/gettts?lan=uk&text=hat&spd=3&source=web'
        }
      ],
      'B': [
        {
          'word': 'banana',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537268139251&di=95628b59e7a8a1b4338c5d37d2dcf5c8&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Ficon%2F20160302%2F1456887629306816.jpg',
          'pronounce': '美 [bəˈnænə]',
          'audio': 'https://fanyi.baidu.com/gettts?lan=en&text=banana&spd=3&source=web'
        },
        {
          'word': 'bird',
          'image': 'https://imgsrc.baidu.com/baike/pic/item/f11f3a292df5e0fe6da21d4d5f6034a85fdf72c0.jpg',
          'pronounce': '美 [bɜ:rd] '
        },
        {
          'word': 'ball',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537268506816&di=60e975b1b1835aa5264207b242225199&imgtype=0&src=http%3A%2F%2Fimg.portofva.com%2Fpic%2Fz16e75e3-0x0-1%2Ftennis_ball.jpg',
          'pronounce': '美 [bɔl] '
        },
        {
          'word': 'bed',
          'image': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3871758008,77885151&fm=26&gp=0.jpg',
          'pronounce': '美 [bɛd]'
        }
      ],
      'C': [
        {
          'word': 'cat',
          'image': 'https://imgsrc.baidu.com/baike/pic/item/b2de9c82d158ccbfa4bb57cc13d8bc3eb03541c5.jpg',
          'pronounce': '美 [kæt]'
        },
        {
          'word': 'car',
          'image': 'http://imgsrc.baidu.com/baike/pic/item/37d12f2eb9389b500c6deccc8d35e5dde6116e99.jpg',
          'pronounce': '美 [kɑr]'
        },
        {
          'word': 'cup',
          'image': 'http://imgsrc.baidu.com/baike/pic/item/4bed2e738bd4b31c6f6280458ed6277f9f2ff8f6.jpg',
          'pronounce': '美 [kʌp] '
        },
        {
          'word': '',
          'image': '',
          'pronounce': ''
        }
      ],
      'D': [
        {
          'word': 'dog',
          'image': 'http://imgsrc.baidu.com/baike/pic/item/03087bf40ad162d973e0c9c217dfa9ec8b13cde6.jpg',
          'pronounce': '美 [dɔ:g]'
        },
        {
          'word': 'duck',
          'image': 'http://imgsrc.baidu.com/baike/pic/item/ae51f3deb48f8c5431bf1b7e39292df5e0fe7f77.jpg',
          'pronounce': '美 [dʌk]'
        },
        {
          'word': 'dad',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537289801726&di=02f75c4da501cedc65079e95a6784981&imgtype=0&src=http%3A%2F%2Fcdn.lizhi.fm%2Faudio_cover%2F2015%2F01%2F02%2F16976407484019975.jpg',
          'pronounce': '美 [dæd]'
        },
        {
          'word': 'dinner',
          'image': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1028526433,3218163047&fm=26&gp=0.jpg',
          'pronounce': '美 [ˈdɪnɚ] '
        }
      ],
      'F': [
        {
          'word':'friend',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537290577917&di=dbcc8e6c3d22b5750b7312a193311501&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1603%2F688-16031QA50aJ.jpg',
          'pronounce':'美 [frɛnd]'
        },
        {
          'word':'fish',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537290176645&di=d42dcc2eb6ca886888e62d763977221c&imgtype=0&src=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F71D3kJPwSRL.png',
          'pronounce':'美 [fɪʃ]'
        },
        {
          'word':'food',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537290498211&di=4d87e336296b3ae0b5f516afa9fd44df&imgtype=0&src=http%3A%2F%2Fimg9.3lian.com%2Fc1%2Fvector3%2F01%2F03%2Fd%2F20.jpg',
          'pronounce':'美 [fud]'
        },
        {
          'word':'flower',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537290289306&di=bdda82989883b16c1f1537ffd3e9d011&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fblog%2F201502%2F04%2F20150204104508_HWSSh.thumb.700_0.jpeg',
          'pronounce':'美 [ˈflaʊɚ]'
        }
      ],
      'G': [
        {
          'word':'girl',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537290801293&di=ff1d14f31d927d414494c26b54695c1b&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201307%2F13%2F20130713083755_nBH3d.jpeg',
          'pronounce':'美 [gɜ:rl]'
        },
        {
          'word':'green',
          'image':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1316291414,1872376304&fm=26&gp=0.jpg',
          'pronounce':'美 [ɡrin]'
        },
        {
          'word':'good',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537290994614&di=be0775fd1d4ef48960f8175dc13b8955&imgtype=0&src=http%3A%2F%2Fimg38.nipic.com%2F20121016%2F5327968_112200175156_1.jpg',
          'pronounce':'美 [ɡʊd]'
        },
        {
          'word':'giraffle',
          'image':'https://imgsrc.baidu.com/baike/pic/item/cdbf6c81800a19d8062d41e431fa828ba61e4621.jpg',
          'pronounce':'美 [dʒəˈræf]'
        }
      ],
      'H': [
        {
          'word':'hat',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291246845&di=c46cb5a4d50549ab61cd48d7ec1a3575&imgtype=0&src=http%3A%2F%2Fp5.qhimg.com%2Ft01262e47f83c7d62cd.png',
          'pronounce':'美 [hæt]'
        },
        {
          'word':'head',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291357591&di=38258c21167ce3a2d64a157325eb33ad&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fcommodity_story%2Fmedium%2Fpublic%2Fp11400642.jpg',
          'pronounce':'美 [hɛd]'
        },
        {
          'word':'hand',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291409871&di=984b0fd0a3f82949bd78cebeeef6ac6a&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2Fdreamstime%2FSheying%2F26%2F33%2F34%2F26333402.jpg',
          'pronounce':'美 [hænd]'
        },
        {
          'word':'horse',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291496901&di=09780010e5c8eb20339e0eea3544263f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F56%2F50%2F65Y58PICqPg_1024.jpg',
          'pronounce':'美 [hɔ:rs]'
        }
      ],
      'I': [
        {
          'word':'bike',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291809382&di=64b6099d324d9595f47c4d5cfee5a181&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F003aGgFyzy75Sikr68R65%26690',
          'pronounce':'美 [baɪk]'
        },
        {
          'word':'kite',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291843047&di=3154c6251730fe38cf83ea1a058c28fc&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69312f54313069562e58587469585858674e6644585f3131343834372e6a7067.jpg',
          'pronounce':'美 [kaɪt]'
        },
        {
          'word':'hill',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291905767&di=d6517f31841f9cab819e2ac11757550c&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd5%2F1608%2F17%2F80fce391d695c9b5.jpg_r_720x480x95_234de896.jpg',
          'pronounce':'美 [hɪl]'
        },
        {
          'word':'big',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291945683&di=ca095b0e907a4fac657d7d782566c122&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2016%2F08%2F24%2F2552957017133975559_580x580.jpg',
          'pronounce':'美 [bɪɡ]'
        }
      ],
      'J': [
        {
          'word': 'jar',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537292931001&di=0280a86a3a9507697aa9bc1d28394f9b&imgtype=0&src=http%3A%2F%2Fimg.frbiz.com%2Fnimg%2F5a%2Fc3%2Fa178f8e6fb94568257248f0919a3-0x0-1%2Fglass_storage_jar_with_lid.jpg',
          'pronounce': '美 [dʒɑr]'
        },
        {
          'word': 'jelly',
          'image': 'http://imgsrc.baidu.com/baike/pic/item/5bafa40f4bfbfbede08aa7047cf0f736aec31ffd.jpg',
          'pronounce': '美 [ˈdʒɛli]'
        },
        {
          'word': 'jug',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537294201873&di=7c0342bd81d866d5f8d832214fb528fb&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3478800882%2C1812628254%26fm%3D214%26gp%3D0.jpg',
          'pronounce': '美 [dʒʌɡ]'
        },
        {
          'word': 'juice',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537294259865&di=63d6fe11cb8da3658d10d83ba12ddab1&imgtype=0&src=http%3A%2F%2Fuploads.rayli.com.cn%2F2015%2F0916%2F1442395776573.png',
          'pronounce': '美 [dʒus]'
        }
      ],
      'K': [
        {
          'word':'key',
          'image':'http://imgsrc.baidu.com/baike/pic/item/8d5494eef01f3a291dbd80819f25bc315c607c03.jpg',
          'pronounce':'美 [ki]'
        },
        {
          'word':'kitchen',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537294522131&di=38d531d7c268ebe85b0979ab75186192&imgtype=0&src=http%3A%2F%2Fimg.frbiz.com%2Fnimg%2F2c%2F15%2F6632e2e1214d2c969702f41abca9-0x0-0%2Fmodular_kitchen_strong_style_color_b82220_steel_stainless_strong_cabinets_from_shenzhen.jpg',
          'pronounce':'美 [ˈkɪtʃən]'
        },
        {
          'word':'king',
          'image':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2013299999,3673158142&fm=26&gp=0.jpg',
          'pronounce':'美 [kɪŋ]'
        },
        {
          'word':'kid',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537294690746&di=65e9eea84e63778afab0adef51790374&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd53f8794a4c27d1eb0636be310d5ad6eddc4384b.jpg',
          'pronounce':'美 [kɪd]'
        }
      ],
      'L': [
        {
          'word':'log',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537294845314&di=19bf9881b832eb13f88dc492677695ed&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D5696bf2191504fc2b652b8468db48d64%2Fd4628535e5dde711e95770dfadefce1b9d166115.jpg',
          'pronounce':'美 [lɔ:g]'
        },
        {
          'word':'lunch',
          'image':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=857612945,2610659794&fm=26&gp=0.jpg',
          'pronounce':'美 [lʌntʃ]'
        },
        {
          'word':'lip',
          'image':'http://imgsrc.baidu.com/baike/pic/item/4a36acaf2edda3cc9e291d6f07e93901203f92b4.jpg',
          'pronounce':'美 [lɪp]'
        },
        {
          'word':'lemon',
          'image':'http://imgsrc.baidu.com/baike/pic/item/908fa0ec08fa513d5e27f61e376d55fbb3fbd965.jpg',
          'pronounce':'美 [ˈlɛmən]'
        }
      ],
      'M': [
        {
          'word': 'man',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537295273354&di=d5852f9f6c5689d122dc39be4fa89791&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F30%2F20150830103944_S2zCB.jpeg',
          'pronounce': '美 [mæn]'
        },
        {
          'word': 'mom',
          'image': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3388501183,3183519767&fm=26&gp=0.jpg',
          'pronounce': '美 [mɑ:m]'
        },
        {
          'word': 'money',
          'image': 'http://imgsrc.baidu.com/baike/pic/item/00e93901213fb80e79b125fe3dd12f2eb93894b2.jpg',
          'pronounce': '美 [ˈmʌni]'
        },
        {
          'word': 'mall',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537295354999&di=8a248fc16bde58527f62c5df3792a30f&imgtype=0&src=http%3A%2F%2Fwww.51fdc.com%2Fimageshome%2Fupload%2F201506260548378907.jpg',
          'pronounce': '美 [mɔl, mæl]'
        }
      ],
      'N': [
        {
          'word':'',
          'image':'',
          'pronounce':''
        },
        {
          'word':'',
          'image':'',
          'pronounce':''
        },
        {
          'word':'',
          'image':'',
          'pronounce':''
        },
        {
          'word':'',
          'image':'',
          'pronounce':''
        }
      ],
      'O': [
        {
          'word':'coat',
          'image':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3872199871,1665312895&fm=26&gp=0.jpg',
          'pronounce':'美 [koʊt]'
        },
        {
          'word':'phone',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537296764995&di=0f61b7bbe85c6ba8044280de06eaa584&imgtype=0&src=http%3A%2F%2Fstatic.leiphone.com%2Fuploads%2Fnew%2Farticle%2F880_880%2F201608%2F57b3dcb862e88.jpg%3FimageMogr2%2Fthumbnail%2F880x%253E%2Fformat%2Fjpg%2Fquality%2F90',
          'pronounce':'美 [foʊn]'
        },
        {
          'word':'globe',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537296825057&di=f349f24bac596f5666be6cc49b9ffbbe&imgtype=0&src=http%3A%2F%2Fdocs.ebdoor.com%2FImage%2FProductImage%2F0%2F499%2F4994137_1.JPG',
          'pronounce':'美 [gloʊb]'
        },
        {
          'word': 'onion',
          'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537296992436&di=16069e45ff2177e5e7d801f5f0e13794&imgtype=0&src=http%3A%2F%2Fimg.21food.com%2F20110609%2Fdescript%2F1306877462770.jpg',
          'pronounce': '美 [ˈʌnjən]'
        }
      ],
      'P': [
        {
          'word':'pillow',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537296896881&di=0d0dd1f2f2246b1b53b49aeef4962917&imgtype=0&src=http%3A%2F%2Fecx.images-amazon.com%2Fimages%2FI%2F71VYkbsQfLL._AA1500_.jpg',
          'pronounce':'美 [ˈpɪloʊ]'
        },
        {
          'word':'pickle',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537297151047&di=b0db2123527cf218d9e26dbcaa917d43&imgtype=0&src=http%3A%2F%2Ftu.tingclass.net%2Fuploads%2F2014%2F0530%2F20140530022427229.jpg',
          'pronounce':'美 [ˈpɪkəl]'
        },
        {
          'word':'puppy',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537297200757&di=4c212952d9f37ffb86c0d223fda64121&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D2785395070%2C357349811%26fm%3D214%26gp%3D0.jpg',
          'pronounce':'美 [ˈpʌpi]'
        },
        {
          'word':'park',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537297306871&di=efe1e80f7eec00e3f32271cb75fb98e0&imgtype=0&src=http%3A%2F%2Fd1euk9k8t2kc51.cloudfront.net%2Fwp-content%2Fuploads%2F2014%2F01%2Fvectortoons-01-18-1552.jpg',
          'pronounce':'美 [pɑ:rk]'
        }
      ],
      'Q': [
        {
          'word':'queen',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537297632288&di=c8189a9b099c19f546a9fd80b66dd20f&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Ficon%2F20151210%2F1449756802157577.jpg',
          'pronounce':'美 [kwin]'
        },
        {
          'word':'quail',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537297724376&di=1a5130271bcc9461e50cf61a820cc9f6&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1837995746%2C2208051815%26fm%3D214%26gp%3D0.jpg',
          'pronounce':'美 [kwel]'
        }
      ],
      'R': [
        {
          'word':'red',
          'image':'http://imgsrc.baidu.com/baike/pic/item/eaf81a4c510fd9f92a8327ff2f2dd42a2934a494.jpg',
          'pronounce':'美 [rɛd]'
        },
        {
          'word':'rabbit',
          'image':'http://imgsrc.baidu.com/baike/pic/item/78310a55b319ebc4bf75b2aa8126cffc1e1716f7.jpg',
          'pronounce':'美 [ˈræbɪt]'
        },
        {
          'word':'rocket',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537298036318&di=d7ac0ea2ffa16a197d1a3a6e21b2bd11&imgtype=0&src=http%3A%2F%2Fwww.politicalmetaphors.com%2Fwp-content%2Fuploads%2F2013%2F11%2Fblog-ACA-rocket.jpg',
          'pronounce':'美 [ˈrɑ:kɪt]'
        },
        {
          'word':'running',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537298102970&di=0c01c3878839b9817e38f50027f48540&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F241f95cad1c8a786a8ec31326c09c93d71cf50c3.jpg',
          'pronounce':'美 [ˈrʌnɪŋ]'
        }
      ],
      'S': [
        {
          'word':'snake',
          'image':'http://imgsrc.baidu.com/baike/pic/item/cdbf6c81800a19d82446bcad34fa828ba71e46d4.jpg',
          'pronounce':'美 [snek]'
        },
        {
          'word':'snow',
          'image':'http://imgsrc.baidu.com/baike/pic/item/4d086e061d950a7b31ba953d0ad162d9f3d3c9b8.jpg',
          'pronounce':'美 [snoʊ]'
        },
        {
          'word':'sand',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537893136&di=2323968bbdda08d3e10f3d9f08ce2dcc&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D0802ef6e2d7f9e2f6438154b77598351%2F060828381f30e9241110c1b946086e061c95f786.jpg',
          'pronounce':'美 [sænd]'
        },
        {
          'word':'sad',
          'image':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1402499833,3600876076&fm=26&gp=0.jpg',
          'pronounce':'美 [sæd]'
        }
      ],
      'T': [
        {
          'word':'turtle',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537298708559&di=421a0f89b06b402581fa3f63a5a795c3&imgtype=0&src=http%3A%2F%2Fwww.followingthetrend.com%2Fwp-content%2Fuploads%2F2014%2F06%2Funimpressed-turtle.jpeg',
          'pronounce':'美 [ˈtɜ:rtl]'
        },
        {
          'word':'tiger',
          'image':'http://imgsrc.baidu.com/baike/pic/item/3b87e950352ac65c7ae3a5b4fbf2b21192138a17.jpg',
          'pronounce':'美 [ˈtaɪɡɚ]'
        },
        {
          'word':'tennis',
          'image':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775423594,3699994012&fm=200&gp=0.jpg',
          'pronounce':'美 [ˈtenɪs]'
        },
        {
          'word':'tank',
          'image':'http://imgsrc.baidu.com/baike/pic/item/cc11728b4710b9123bc60841c9fdfc039245220e.jpg',
          'pronounce':'美 [tæŋk]'
        }
      ],
      'U': [
        {
          'word':'duck',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537299015316&di=e2cb5ce5d54a3a6a3765b599fe2bda5b&imgtype=0&src=http%3A%2F%2Fp5.qhimg.com%2Ft0113c352c413149078.png',
          'pronounce':'美 [dʌk]'
        },
        {
          'word':'truck',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537298978530&di=a230a9aed95b326849f58475b9713814&imgtype=0&src=http%3A%2F%2Fwww.iccwx.cn%2FUploadFiles%2Fimage%2F20150925%2F20150925131300_4648.jpg',
          'pronounce':'美 [trʌk]'
        },
        {
          'word':'sun',
          'image':'http://imgsrc.baidu.com/baike/pic/item/3812b31bb051f81985d93ec6dab44aed2f73e7b9.jpg',
          'pronounce':'美 [sʌn]'
        },
        {
          'word':'umbrella',
          'image':'http://imgsrc.baidu.com/baike/pic/item/fcfaaf51f3deb48fac88f891f61f3a292cf5789f.jpg',
          'pronounce':'美 [ʌmˈbrɛlə]'
        }
      ],
      'V': [
        {
          'word':'van',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537299136486&di=0d2ea8a13e68fd2556f4f8711d8367bb&imgtype=0&src=http%3A%2F%2Fimg.9ku.com%2Fgeshoutuji%2Fsingertuji%2F1%2F15361%2F15361_1.jpg',
          'pronounce':'美 [væn]'
        },
        {
          'word':'viper',
          'image':'http://imgsrc.baidu.com/baike/pic/item/3b87e950352ac65c1ab41dddf3f2b21192138aee.jpg',
          'pronounce':'美 [ˈvaɪpɚ]'
        },
        {
          'word':'vulture',
          'image':'',
          'pronounce':'美 [ˈvʌltʃɚ]'
        }
      ],
      'W': [
        {
          'word':'window',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537299864473&di=bdc092aec54bc895a89f6e3a0e9c21df&imgtype=0&src=http%3A%2F%2Fimgs.tuts.dragoart.com%2Fhow-to-draw-a-window_1_000000000945_5.jpg',
          'pronounce':'美 [ˈwɪndoʊ]'
        },
        {
          'word':'water',
          'image':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=606405673,3936138052&fm=26&gp=0.jpg',
          'pronounce':'美 [ˈwɔtɚ, ˈwɑtɚ]'
        },
        {
          'word':'woman',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537300006979&di=e37c1bbdf4a29957eba4b776106844f9&imgtype=0&src=http%3A%2F%2Fnews.cri.cn%2Fmmsource%2Fimages%2F2015%2F02%2F10%2Fa2f16b0a31f94689a22bb7e8799b99f7.jpg',
          'pronounce':'美 [ˈwʊmən]'
        },
        {
          'word':'wagon',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537299818948&di=fb4254e9c2809a399d429cdabb3b1dbb&imgtype=0&src=http%3A%2F%2Fwww.qingdaoxinquan.com%2FimageRepository%2F81bba1df-0420-4e18-9693-49c79da82a53.JPG',
          'pronounce':'美 [ˈwæɡən]'
        }
      ],
      'X': [
        {
          'word':'fox',
          'image':'http://imgsrc.baidu.com/baike/pic/item/cdbf6c81800a19d8feb8d22e34fa828ba61e4665.jpg',
          'pronounce':'美 [fɑ:ks]'
        },
        {
          'word':'box',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537300203601&di=b13d876edd26607dfbbe370ff59d0f48&imgtype=0&src=http%3A%2F%2Fwww.daoyouz.com%2Fpicture%2F55ade22fcb3ccc37231e3e681aa01161.png',
          'pronounce':'美 [bɑ:ks]'
        },
        {
          'word':'ox',
          'image':'http://imgsrc.baidu.com/baike/pic/item/91ef76c6a7efce1b84dd8f00ad51f3deb58f6501.jpg',
          'pronounce':'美 [ɑ:ks]'
        }
      ],
      'Y': [
        {
          'word':'yellow',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537300526532&di=7e6ec7d0dbd60a20c2a7ba9d286a33bc&imgtype=0&src=http%3A%2F%2Fimg2.everychina.com%2Fimg%2Feb%2Faa%2F8dedff0f5c93fe4eb93843771c25-600x400c1-6a7c%2Fchrome_yellow.jpg',
          'pronounce':'美 [ˈjeloʊ]'
        },
        {
          'word':'yogurt',
          'image':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=794341696,3970570083&fm=26&gp=0.jpg',
          'pronounce':'美 [ˈjoɡət]'
        },
        {
          'word':'yummy',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537300573544&di=e2c6334a3cb3868e3a04794004351ce5&imgtype=0&src=http%3A%2F%2Fi3.sinaimg.cn%2Fedu%2F2014%2F0915%2FU3652P42DT20140915132623.jpg',
          'pronounce':'美 [ˈjʌmi]'
        },
        {
          'word':'yak',
          'image':'http://imgsrc.baidu.com/baike/pic/item/eac4b74543a982269f83b8cb8382b9014b90eb98.jpg',
          'pronounce':'美 [jæk]'
        }
      ],
      'Z': [
        {
          'word':'zero',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537300803290&di=77da5706ad210dd1d0eac35fd8dd382f&imgtype=0&src=http%3A%2F%2Fi-4.yxdown.com%2F2018%2F8%2F23%2Fc2cb8f9d-894a-4f01-8a4b-dc8fc00cf555.png',
          'pronounce':'美 [ˈzɪroʊ]'
        },
        {
          'word':'zoo',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537300835166&di=eeff0f7db0647c5bf4f793c438572540&imgtype=0&src=http%3A%2F%2Fpic.kekenet.com%2F2017%2F0922%2F68161506047074.png',
          'pronounce':'美 [zu]'
        },
        {
          'word':'zombie',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537300749842&di=24d08e8e269434152bdffef07e1c2a6c&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fyouxi%2Fimages%2F2013%2F0629%2F20130629052218120.jpg',
          'pronounce':'美 [ˈzɑ:mbi]'
        },
        {
          'word':'jazz',
          'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537895612&di=c97db9f00a05e08bb729515cb53a0bab&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.alljazzradio.co.za%2Fwp-content%2Fuploads%2F2014%2F12%2FJazz-En.jpg',
          'pronounce':'美 [dʒæz]'
        }
      ]
    }
  }
})