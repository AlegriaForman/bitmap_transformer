'use strict';

const fs = require('fs');

function transformBlue(bmpBlueBuf, start, name) {
  var blueBuffer = bmpBlueBuf;
  var blueColor = () => {
    for (var i = start; i < blueBuffer.length; i += 3) {
      var r = blueBuffer[i] * 1;
      var g = blueBuffer[i + 1] * 0.0001;
      var b = blueBuffer[i + 2] * 0.0001;
      var rgbBlue = r + g + b;
      blueBuffer[i] = rgbBlue + 500;
      blueBuffer[i + 1] = rgbBlue * 0.133;
      blueBuffer[i + 2] = rgbBlue * 0.133;
    }
    fs.writeFile(__dirname + '/../imagesOut/blue_' + name, blueBuffer, (err) => {
      if (err) throw err;
      console.log('Successfully transformed the bitmap to blue.');
    });
  };
  blueColor();
}
module.exports = transformBlue;
