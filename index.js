'use strict';

var zxcvbn = require('zxcvbn');
var colors = require('ansi-colors');

module.exports = function(input) {
  var len = Math.ceil(input.length * 1.2);
  var bar = '█' + new Array(len).join('█');
  var strength = zxcvbn(input);

  switch(strength.score) {
    case 1:
      return colors.red(bar);
    case 2:
      return colors.yellow(bar);
    case 3:
      return colors.cyan(bar);
    case 4:
      return colors.green(bar);
    default: {
      return bar;
    }
  }
};
