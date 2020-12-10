const PublicMethods = {
  //获取cookie
  getCookie: function(name) {
    var arr = "";
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2]);
    } else {
      return "";
    }
  },

  //获取链接里的参数
  getUrlParams() {
    let obj = {};
    let is_parameter = window.location.href.split("?");

    if (is_parameter.length <= 1) {
      return obj;
    }

    let parList = is_parameter[1].split("&");
    for (var i = 0; i < parList.length; i++) {
      var arr = parList[i].split("=");
      var key = arr[0];
      var value = arr[1];
      obj[key] = value;
    }
    return obj;
  },

  getToday() {
    //获取系统当前时间
    var nowdate = new Date();
    var y = nowdate.getFullYear();
    var m = nowdate.getMonth() + 1;
    var d = nowdate.getDate();

    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;

    var formatToday = y + "-" + m + "-" + d;
    return formatToday;
  },

  getWeek() {
    //获取系统前一周的时间
    var nowdate = new Date();
    var oneweekdate = new Date(nowdate - 7 * 24 * 3600 * 1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth() + 1;
    var d = oneweekdate.getDate();

    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;

    var formatWeek = y + "-" + m + "-" + d;
    return formatWeek;
  },

  getMonth() {
    //获取系统前一个月的时间
    var nowdate = new Date();
    var oneweekdate = new Date(nowdate - 30 * 24 * 3600 * 1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth() + 1;
    var d = oneweekdate.getDate();

    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;

    var formatMonth = y + "-" + m + "-" + d;
    return formatMonth;
  },

  getDynamicDay(agoDay) {
    //获取系统前一个月的时间
    var nowdate = new Date();
    var oneweekdate = new Date(nowdate - agoDay * 24 * 3600 * 1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth() + 1;
    var d = oneweekdate.getDate();

    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;

    var formatAgo = y + "-" + m + "-" + d;
    return formatAgo;
  },

  getweekday(date) {
    //获取某天对应的周几
    var weekArray = new Array("7", "1", "2", "3", "4", "5", "6");
    var week = weekArray[new Date(date).getDay()]; //注意此处必须是先new一个Date
    return week;
  },

  //判断当前App环境
  appSource() {
    const u = navigator.userAgent;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
      return "ios";
    } else {
      return "android";
    }
  },

  //判断是否在微信环境里
  isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  }
};

export default PublicMethods; //封装所有公共方法
