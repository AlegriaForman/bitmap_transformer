'use strict';

const fs = require('fs');

function invTransform(bmpBuf, start, name) {
  var invBuffer = bmpBuf;
  var invertColor = () => {
    for (var i = start; i < invBuffer.length; i++) {
      invBuffer[i] = 255 - invBuffer[i];
    }
    fs.writeFile(__dirname + '/../imagesOut/invert_' + name, invBuffer, (err) => {
      if (err) throw err;
      console.log('Transform completed!');
    });
  };
  invertColor();
}
module.exports = invTransform;
