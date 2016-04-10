'use strict';
const fs = require('fs');
const transform = require(__dirname + '/invert.js');
let bmpBuf = fs.readFileSync(__dirname + '/../imagesIn/' + process.argv[2]);

function invertBuffer() {
  var bmpData = {};
  bmpData.name = process.argv[2];
  bmpData.bmpTypeField = bmpBuf.toString('ascii', 0, 2);
  bmpData.numBytes = bmpBuf.readInt32LE(2);
  bmpData.pixelImgStart = bmpBuf.readInt32LE(10);
  bmpData.numColors = bmpBuf.readInt32LE(46);
  console.log(bmpData);

  function invertTransform() {
    transform(bmpBuf, bmpData.pixelImgStart, bmpData.name);
  }
  invertTransform();
}

invertBuffer();

module.exports = invertBuffer;
