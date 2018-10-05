'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp();
exports.default = Page({
  data: {
    entities: null,
    slides: null
  },
  onLoad: function onLoad() {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    });
  }
});