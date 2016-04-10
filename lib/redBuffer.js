'use strict';
const fs = require('fs');
const red = require(__dirname + '/red.js');
let bmpRedBuf = fs.readFileSync(__dirname + '/../imagesIn/' + process.argv[2]);

function redBuffer() {
  var bmpRedData = {};
  bmpRedData.name = process.argv[2];
  bmpRedData.bmpTypeField = bmpRedBuf.toString('ascii', 0, 2);
  bmpRedData.numBytes = bmpRedBuf.readInt32LE(2);
  bmpRedData.pixelImgStart = bmpRedBuf.readInt32LE(10);
  bmpRedData.numColors = bmpRedBuf.readInt32LE(46);
  console.log(bmpRedData);

  function redTransform() {
    red(bmpRedBuf, bmpRedData.pixelImgStart, bmpRedData.name);
  }
  redTransform();
}
redBuffer();

module.exports = redBuffer;
