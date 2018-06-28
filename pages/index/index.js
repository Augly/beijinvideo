// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playIndex: null,
    showPlay:false,
    videoList:[
      {
        src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        imgSrc:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530118034&di=93140b4fdeaa8def0d2f36f341670a30&src=http://pic.58pic.com/58pic/14/34/23/26c58PIC4Pq_1024.jpg',
        id:31,
      },
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        imgSrc: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530118034&di=93140b4fdeaa8def0d2f36f341670a30&src=http://pic.58pic.com/58pic/14/34/23/26c58PIC4Pq_1024.jpg',
        id: 32,
      },
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        imgSrc: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530118034&di=93140b4fdeaa8def0d2f36f341670a30&src=http://pic.58pic.com/58pic/14/34/23/26c58PIC4Pq_1024.jpg',
        id: 34,
      },
      {
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        imgSrc: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1530118034&di=93140b4fdeaa8def0d2f36f341670a30&src=http://pic.58pic.com/58pic/14/34/23/26c58PIC4Pq_1024.jpg',
        id: 35,
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkInternet()
    
  },
  videoPlay: function (e) {
    
    var length = this.data.videoList.length
    var index = e.currentTarget.dataset.index
    var id = e.currentTarget.id
    console.log(index)
    if (!this.data.playIndex) { // 没有播放时播放视频
      this.setData({
        playIndex: index,
        playmid: id
      })
      var videoContext = wx.createVideoContext('myVideo' + id)
      videoContext.play()
    } else {                    // 有播放时先将prev暂停到0s，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext('myVideo' + this.data.playmid)
      videoContextPrev.seek(0)
      videoContextPrev.pause()
      this.setData({
        playIndex: index,
        playmid:id
      })
      var videoContextCurrent = wx.createVideoContext('myVideo' + this.data.playmid)
      videoContextCurrent.play()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  myplay(e){
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

  rem(height){
      wx.getSystemInfo({
        success:(res)=>{
          if (height == undefined || height == null) {
            this.setData({
              myheight: res.windowHeight
            }) 
          }else{
            this.setData({
              myheight: res.windowHeight-res.windowWidth / 750 * height
            })
          }
        },
      })

  },

  checkInternet(){
    try {
      wx.getNetworkType({
        success: function (res) {
          if(res.networkType!='wifi'){
            wx.showToast({
              title: '您当前的网络的状态为' + res.networkType+'网络!请注意您的流量费用',
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
    console.log(1)
  },
  // videoDuration:function(e){
  //   console.log(e)
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})