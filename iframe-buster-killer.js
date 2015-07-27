'use strict';

module.exports = function (noContentUrl) {
  if (window.location === window.top.location) {
    return;
  }
  var preventBust = {count: 0};
  window.onbeforeunload = function() { preventBust.count++; };
  setInterval(function() {
    if (preventBust.count > 0) {
      preventBust.count -= 2;
      window.top.location = noContentUrl;
    }
  }, 1);

  // fix forms and links that what to open in _top
  var targetTopEls = document.querySelectorAll('[target=_top]');
  for (var i=0; i<targetTopEls.length; i++) {
    targetTopEls[i].target = '';
  }
};
