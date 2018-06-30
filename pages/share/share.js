// pages/index/index.js
var myvideoContext = null;
var app = getApp();
var page = 1;
const config = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myshowPlay: false,
    nodata: false,
    playmyvideo: null,
    playmymid: null,
    myvideo: null,
    videoList: [],
    playIndex: null,
    mask: false,
    page: 'share',
    moretype: '上拉查看更多哦~'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中...',
      mask: true,
    })
    var that = this

    this.rem(594)
    console.log(480)
    console.log(options.alldata)
    var alldata = JSON.parse(options.alldata);
    this.setData({
      alldataone: alldata
    })
    wx.setNavigationBarTitle({
      title: alldata.title,
    })
    config.ajax('POST', {
      id: alldata.id
    }, config.videoPlay, (res) => {
      if (res.data.statusMsg == "success") {
        alldata.videoUrl = res.data.data
        that.setData({
          alldata: alldata,
          playmyvideo: 'myvideo',
          playmymid: alldata.id
        })
        myvideoContext = wx.createVideoContext('myVideo' + alldata.id)
        myvideoContext.play()
        that.getlistHot()
        that.getAps()
      }

    }, (res) => {

    })

  },
  /**
 * 挑往首页
 */
  toindex: function () {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  /**
* 获取热点视频列表
*/
  // getlistHot() {
  //   var params = {}
  //   config.ajax('POST', params, config.listHot, (res) => {
  //     wx.hideLoading()
  //     this.setData({
  //       videoList: res.data.data,
  //       mask: true
  //     })
  //   }, (res) => {

  //   })
  // },
  /**
 * 获取是否显示广告
 */
  getAps() {
    var params = {
      location: 'share'
    }
    config.ajax('POST', params, config.aps, (res) => {
      console.log(res.data.data)
      this.setData({
        aps: res.data.data
      })
    }, (res) => {

    })
  },
  onlyvideoPlay: function (e) {
    var that = this
    this.setData({
      playmyvideo: 'myvideo',
      playmymid: this.data.alldata.id
    })
    myvideoContext = wx.createVideoContext('myVideo' + this.data.alldata.id)
    myvideoContext.play()
    that.setData({
      playIndex: null
    })
  },
  /**
   * 播放事件
   */
  myvideoPlay: function (e) {
    console.log(e)
    var that = this
    // this.goTop()
    var mh = e.detail.index * 499;
    mh = mh + 162
    var amh = mh * this.data.sheight / 750
    var alldata = JSON.parse(e.detail.alldata);
    this.setData({
      alldataone: alldata,
      scrollTop: amh
    })
    wx.setNavigationBarTitle({
      title: alldata.title,
    })
    config.ajax('POST', {
      id: alldata.id
    }, config.videoPlay, (res) => {
      if (res.data.statusMsg == "success") {
        alldata.videoUrl = res.data.data
        that.setData({
          alldata: alldata,
          playmyvideo: 'myvideo',
          playmymid: alldata.id
        })
        myvideoContext = wx.createVideoContext('myVideo' + alldata.id)
        myvideoContext.play()
        that.getlistHot()
        that.getAps()
      }

    }, (res) => {

    })
    if (this.data.playmyvideo != null && this.data.playmymid != null) {
      myvideoContext.seek(0)
      myvideoContext.pause()
      this.setData({
        playmyvideo: null,
        playmymid: null
      })
    }
  },
  rem(height) {
    var that = this
    var myheight = ''
    wx.getSystemInfo({
      success: (res) => {
        if (height == undefined || height == null) {

          myheight = res.windowHeight

        } else {

          myheight = res.windowHeight - res.windowWidth / 750 * height

        }
        that.setData({
          myheight: myheight,
          sheight: res.windowWidth
        })
      },
    })

  },
  // goTop: function (e) {
  //   this.setData({
  //     scrollTop: 0
  //   })
  // },
  /**
  * 获取热点视频列表
  */
  getlistHot() {
    var params = {}
    config.ajax('POST', params, config.listHot, (res) => {
      // console.log(res.data.data)
      wx.hideLoading()
      this.setData({
        mask: true,
        videoList: res.data.data
      })
    }, (res) => {

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  myplay(e) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function () {
  //   var that = this
  //   // wx.showNavigationBarLoading()
  //   wx.showLoading({
  //     title: '数据加载中...',
  //     mask: true,
  //   })
  //   // myvideoContext = wx.createVideoContext('myVideo' + alldata.id)
  //   // myvideoContext.play()
  //   that.getlistHot()
  //   that.getAps()

  //   this.setData({
  //     playIndex: null
  //   })
  //   // wx.hideNavigationBarLoading()
  //   wx.stopPullDownRefresh()
  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {
  //   var that=this
  //   page++
  //   that.setData({
  //     moretype: '正在加载中~'
  //   })
  //   setTimeout(()=>{
  //     that.getlistHot()
  //     that.setData({
  //       nodata: true,
  //       playIndex: null
  //     })
  //   }, 2000)

  // },
  /**
 * 页面上拉触底事件的处理函数
 */
  more: function () {
    var that = this
    page++
    that.setData({
      moretype: '正在加载中~'
    })
    setTimeout(() => {
      that.getlistHot()
      that.setData({
        nodata: true,
        playIndex: null
      })
    }, 2000)

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    var that = this
    var alldataone = that.data.alldataone
    alldataone.videoUrl = ''
    if (res.from === 'button') {

      if (res.target.dataset.id == '分享好友') {

        return {
          title: alldataone.title,
          path: '/pages/share/share?alldata=' + JSON.stringify(alldataone)
        }
      } else {
        config.ajax('POST', {
          id: res.target.dataset.id,
          openid: app.globalData.openid
        }, config.videoShare, (res) => {

        }, (res) => {

        })
        var alldata = {
          id: res.target.dataset.id,
          title: res.target.dataset.title,
          cover: res.target.dataset.cover,
          durationd: res.target.dataset.durationd,
          allnum: res.target.dataset.allnum
        }
        return {
          title: alldata.title,
          path: '/pages/share/share?alldata=' + JSON.stringify(alldata),
          imageUrl: alldata.cover
        }
      }
    } else {
      return {
        title: alldataone.title,
        path: '/pages/share/share?alldata=' + JSON.stringify(alldataone)
      }
    }
  }
})