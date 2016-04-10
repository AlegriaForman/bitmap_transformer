'use strict';

const fs = require('fs');
const transform = require(__dirname + '/lib/invert.js');
const blue = require(__dirname + '/lib/blue.js');
const red = require(__dirname + '/lib/red.js');

let bmpBuf = fs.readFileSync(__dirname + '/imagesIn/' + process.argv[2]);
let bmpBlueBuf = fs.readFileSync(__dirname + '/imagesIn/' + process.argv[2]);
let bmpRedBuf = fs.readFileSync(__dirname + '/imagesIn/' + process.argv[2]);

let bmpData = {};
bmpData.name = process.argv[2];
bmpData.bmpTypeField = bmpBuf.toString('ascii', 0, 2);
bmpData.numBytes = bmpBuf.readInt32LE(2);
bmpData.pixelImgStart = bmpBuf.readInt32LE(10);
bmpData.numColors = bmpBuf.readInt32LE(46);
console.log(bmpData);

let bmpBlueData = {};
bmpBlueData.name = process.argv[2];
bmpBlueData.bmpTypeField = bmpBlueBuf.toString('ascii', 0, 2);
bmpBlueData.numBytes = bmpBlueBuf.readInt32LE(2);
bmpBlueData.pixelImgStart = bmpBlueBuf.readInt32LE(10);
bmpBlueData.numColors = bmpBlueBuf.readInt32LE(46);
console.log(bmpBlueData);

let bmpRedData = {};
bmpRedData.name = process.argv[2];
bmpRedData.bmpTypeField = bmpRedBuf.toString('ascii', 0, 2);
bmpRedData.numBytes = bmpRedBuf.readInt32LE(2);
bmpRedData.pixelImgStart = bmpRedBuf.readInt32LE(10);
bmpRedData.numColors = bmpRedBuf.readInt32LE(46);
console.log(bmpRedData);

var bmpTransform = function() {
  transform(bmpBuf, bmpData.pixelImgStart, bmpData.name);
  blue(bmpBlueBuf, bmpBlueData.pixelImgStart, bmpBlueData.name);
  red(bmpRedBuf, bmpRedData.pixelImgStart, bmpRedData.name);
};
bmpTransform();
