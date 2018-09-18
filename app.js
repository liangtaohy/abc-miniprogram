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
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
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
          'image': 'http://imgsrc.baidu.com/baike/pic/item/ae51f3deb48f8c5431bf1b7e39292df5e0fe7f77.jpg',
          'pronounce': ''
        },
        {
          'word': '',
          'image': '',
          'pronounce': ''
        }
      ],
      'F': [
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
      'G': [
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
      'H': [
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
      'I': [
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
      ]
    }
  }
})