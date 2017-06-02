'use strict';

var zxcvbn = require('zxcvbn');
var isWindows = require('is-windows');
var colors = require('ansi-colors');

module.exports = function(input) {
  var bar = '█' + new Array(Math.ceil(input.length)).join('█');
  var strength = zxcvbn(input);

  switch (strength.score) {
    case 1:
      return colors.red(bar);
    case 2:
      return colors.yellow(bar);
    case 3:
      return colors[isWindows() ? 'blue' : 'cyan'](bar);
    case 4:
      return colors.green(bar);
    default: {
      return bar;
    }
  }
};
