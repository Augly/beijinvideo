// const appid = "wxmp_ouavyAG6",  //zero测试所用appid
var https = "https://hv.dingapp.com",  //主域名

  isSubscibe='/api/wxUser/isSubscibe',  //检查是否订阅

  aps = '/api/adv/info',  //广告接口

  wxUser = '/api/wxUser/info',   //获取微信用户信息

  wxLogin = '/api/wxUser/login', // 获取微信openid

  wxformId = '/api/wxUser/subscibe',  //收集formId

  hotWord = '/api/hotWords/list',  //热搜接口

  videoList = '/api/video/list',  //首页和详情页视频列表接口

  listHot = '/api/video/listHot',  //分析页面热点视频

  videoShare ='/api/video/share',  //分享视频

  videoPlay = '/api/video/play';  //统计播放次数
/**
 * 自定义request请求基类
 */
function ajax(Type, params, url, successData, errorData, completeData) {
  var methonType = "application/json";
  //访问的主域名
  var https = "https://hv.dingapp.com"
  // var client_secret = secret;
  // var st = new Date().getTime() - new Date().getTimezoneOffset();
  // var sign = sdk.getSignature(params, st, client_secret);
  if (Type === 'PUT') {
    var p = Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    }).join("&");
    url += '?' + p;
    params = {}
  }
  if (Type == "POST") {
    methonType = "application/x-www-form-urlencoded"
  }
  wx.request({
    url: https + url,
    method: Type,
    header: {
      'content-type': methonType,
    },
    data: params,
    success: (res) => {
      successData(res)
    },
    error(res) {
      if (errorData) {
        errorData(res)
      }
    },
    complete(res) {
      if (completeData) {
        completeData(res)
      }
    }
  })
};

//导出模块
module.exports = {
  ajax: ajax,
  aps: aps,
  wxUser: wxUser,
  wxLogin: wxLogin,
  wxformId: wxformId,
  hotWord: hotWord,
  videoList: videoList,
  listHot: listHot,
  videoPlay: videoPlay,
  videoShare: videoShare,
  isSubscibe: isSubscibe
}