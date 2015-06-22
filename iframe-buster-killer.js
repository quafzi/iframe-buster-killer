'use strict';

var config = require('../config');

module.exports = function () {
  var preventBust = {count: 0};
  window.onbeforeunload = function() { preventBust.count++; };
  setInterval(function() {
    console.log('preventBust: ', preventBust.count);
    if (preventBust.count > 0) {
      preventBust.count -= 2;
      window.top.location = config.apiUrl + 'no-content';
    }
  }, 1);
};
