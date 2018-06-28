// Component/AuglyVideo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    playIndex: null,
    showPlay: false,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //播放视频相关方法
    videoPlay: function (e) {
      var length = this.data.videoList.length
      var index = e.currentTarget.dataset.index
      var id = e.currentTarget.id
      if (!this.data.playIndex) { // 没有播放时播放视频
        this.setData({
          playIndex: index,
          playmid: id
        })
        var videoContext = wx.createVideoContext('myVideo' + id, this)
        videoContext.play()
      } else {                    // 有播放时先将prev暂停到0s，再播放当前点击的current
        var videoContextPrev = wx.createVideoContext('myVideo' + this.data.playmid, this)
        videoContextPrev.seek(0)
        videoContextPrev.pause()
        this.setData({
          playIndex: index,
          playmid: id
        })
        var videoContextCurrent = wx.createVideoContext('myVideo' + this.data.playmid, this)
        videoContextCurrent.play()
      }
      var myEventDetail = {
        playIndex: this.data.playIndex,
        playmid: this.data.playmid
      } // detail对象，提供给事件监听函数
      var myEventOption = {

      } // 触发事件的选项
      this.triggerEvent('videoPlay', myEventDetail, myEventOption)
    },
    //打开其它小程序
    openminiApp(e) {
      var myEventDetail = {

      } // detail对象，提供给事件监听函数
      var myEventOption = {

      } // 触发事件的选项
      var index = e.currentTarget.dataset.index
      var vObg = this.data.videoList[index].
        wx.navigateToMiniProgram({
          appId: vObg.MiniProgram.appid,
          path: vObg.MiniProgram.path,
          extraData: vObg.MiniProgram.extraData,
          envVersion: vObg.MiniProgram.envVersion,
          success(res) {
            this.triggerEvent('openminiApp', myEventDetail, myEventOption)
          }
        })
    },
    submitInfo(e) {
      var myEventDetail = {
        e: e
      }
      var myEventOption = {

      } // 触发事件的选项
      this.triggerEvent('submitInfo', myEventDetail, myEventOption)
    }
  }
})
