'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = require('./static/utils/system.js');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = App({
  globalData: {},
  onLaunch: function onLaunch() {
    var _this = this;

    _system2.default.attachInfo();
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: function success(response) {
        Object.assign(_this.globalData, response.data);

        var currentPages = getCurrentPages();
        if (currentPages.length !== 0) {
          currentPages[currentPages.length - 1].onLoad();
        }
      }

    });
  },
  onShow: function onShow() {},
  onHide: function onHide() {}
});