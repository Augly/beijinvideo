// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodata:false,
    videoList: [
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        //视频播放地址
        imgSrc: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530118034&di=93140b4fdeaa8def0d2f36f341670a30&src=http://pic.58pic.com/58pic/14/34/23/26c58PIC4Pq_1024.jpg',
        //视频封面展示地址
        id: 34,   //视频id
        title: ' 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题',  //视频标题
        time: '01:30',  //视频时长
        _number: 255,   //播放次数
        ifminiApp: true,  //是否有需要打开的小程序
        MiniProgram: {   //当ifminiApp为true时有此对象参数
          appId: '',  //需要打开小程序的参数
          path: '',    //需要打开小程序的路劲，为空则打开首页
          extraData: {},  //是否需要传参,传递的参数
          envVersion: 'develop'  //打开的小程序版本
        }
      },
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        //视频播放地址
        imgSrc: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530118034&di=93140b4fdeaa8def0d2f36f341670a30&src=http://pic.58pic.com/58pic/14/34/23/26c58PIC4Pq_1024.jpg',
        //视频封面展示地址
        id: 35,   //视频id
        title: ' 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 这是标题',  //视频标题
        time: '01:30',  //视频时长
        _number: 255,   //播放次数
        ifminiApp: true,  //是否有需要打开的小程序
        MiniProgram: {   //当ifminiApp为true时有此对象参数
          appId: '',  //需要打开小程序的参数
          path: '',    //需要打开小程序的路劲，为空则打开首页
          extraData: {},  //是否需要传参,传递的参数
          envVersion: 'develop'  //打开的小程序版本
        }
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkInternet()
    this.videoGroup = this.selectComponent("#videoGroup")
  },
  /**
   * 播放事件
   */
  myvideoPlay: function (e) {
    console.log(e)
  },
  /**
   * 打开其它小程序
   */
  myopenminiApp(e) {
    console.log(e)
  },
  /**
   * 收集formId
   */
  mysubmitInfo(e){
    console.log(e.detail.e.detail.formId)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  myplay(e) {
    console.log(1)
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

  rem(height) {
    wx.getSystemInfo({
      success: (res) => {
        if (height == undefined || height == null) {
          this.setData({
            myheight: res.windowHeight
          })
        } else {
          this.setData({
            myheight: res.windowHeight - res.windowWidth / 750 * height
          })
        }
      },
    })

  },

  checkInternet() {
    try {
      wx.getNetworkType({
        success: function (res) {
          if (res.networkType != 'wifi') {
            wx.showToast({
              title: '您当前的网络的状态为' + res.networkType + '网络!请注意您的流量费用',
              icon: 'none',
              mask: true,
            })
          }
        }
      })
    }
    catch (err) {

    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      nodata:true
    })
  },
  // videoDuration:function(e){
  //   console.log(e)
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    // return {
    //   title: '自定义转发标题',
    //   path: '/page/user?id=123'
    // }
  }
})