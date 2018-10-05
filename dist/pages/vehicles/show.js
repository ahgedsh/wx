"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp();
exports.default = Page({
  data: {
    entity: null
  },
  preview: function preview(event) {
    var slidesName = event.target.dataset.slides;
    var index = event.target.dataset.index;

    var slides = this.data.entity.meta[slidesName];
    var images = [];

    slides.map(function (item) {
      images.push(item.image);
    });
    wx.previewImage({
      urls: images,
      current: images[index]

    });
  },
  onLoad: function onLoad(options) {
    var id = options.id;
    var entity = app.globalData.vehicles.filter(function (item) {
      return item.id == id;
    });
    this.setData({
      entity: entity[0]
    });
    wx.setNavigationBarTitle({
      title: this.data.entity.header
    });
  }
});