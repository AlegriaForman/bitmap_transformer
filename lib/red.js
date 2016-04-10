'use strict';

const fs = require('fs');

function transformRed(bmpRedBuf, start, name) {
  var redBuffer = bmpRedBuf;
  var redColor = () => {
    for (var i = start; i < redBuffer.length; i += 3) {
      var r = redBuffer[i] * 1;
      var g = redBuffer[i + 1] * 0.0001;
      var b = redBuffer[i + 2] * 0.0001;
      var rgbRed = r + g + b;
      redBuffer[i] = rgbRed * 0.133;
      redBuffer[i + 1] = rgbRed * 0.133;
      redBuffer[i + 2] = rgbRed + 500;
    }
    fs.writeFile(__dirname + '/../imagesOut/red_' + name, redBuffer, (err) => {
      if (err) throw err;
      console.log('Successfully transformed the bitmap to red.');
    });
  };
  redColor();
}
module.exports = transformRed;
