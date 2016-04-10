'use strict';

const fs = require('fs');
const blue = require(__dirname + '/blue.js');
let bmpBlueBuf = fs.readFileSync(__dirname + '/../imagesIn/' + process.argv[2]);

function blueBuffer() {
  var bmpBlueData = {};
  bmpBlueData.name = process.argv[2];
  bmpBlueData.bmpTypeField = bmpBlueBuf.toString('ascii', 0, 2);
  bmpBlueData.numBytes = bmpBlueBuf.readInt32LE(2);
  bmpBlueData.pixelImgStart = bmpBlueBuf.readInt32LE(10);
  bmpBlueData.numColors = bmpBlueBuf.readInt32LE(46);
  console.log(bmpBlueData);

  function blueTransform() {
    blue(bmpBlueBuf, bmpBlueData.pixelImgStart, bmpBlueData.name);
  }
  blueTransform();
}

blueBuffer();

module.exports = blueBuffer;
