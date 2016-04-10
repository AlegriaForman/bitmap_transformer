'use strict';
const expect = require('chai').expect;
const fs = require('fs');
let bmpBuf = fs.readFileSync(__dirname + '/../imagesIn/dog.bmp');
let bmpBlueBuf = fs.readFileSync(__dirname + '/../imagesIn/dog.bmp');
let bmpRedBuf = fs.readFileSync(__dirname + '/../imagesIn/dog.bmp');

describe('invertBuffer test ', () => {
  it('should read meta header data from invert buffer', () => {
    var bmpData = {};
    bmpData.name = process.argv[2];
    bmpData.bmpTypeField = bmpBuf.toString('ascii', 0, 2);
    bmpData.numBytes = bmpBuf.readInt32LE(2);
    bmpData.pixelImgStart = bmpBuf.readInt32LE(10);
    bmpData.numColors = bmpBuf.readInt32LE(46);
    expect(bmpData).to.have.property('name');
    expect(bmpData.bmpTypeField).to.eql('BM');
    expect(bmpData.numBytes).to.eql(30054);
    expect(bmpData.pixelImgStart).to.eql(54);
    expect(bmpData.numColors).to.eql(0);
  });
});

describe('blueBuffer test ', () => {
  it('should read meta header data from blue buffer', () => {
    var bmpBlueData = {};
    bmpBlueData.name = process.argv[2];
    bmpBlueData.bmpTypeField = bmpBlueBuf.toString('ascii', 0, 2);
    bmpBlueData.numBytes = bmpBlueBuf.readInt32LE(2);
    bmpBlueData.pixelImgStart = bmpBlueBuf.readInt32LE(10);
    bmpBlueData.numColors = bmpBlueBuf.readInt32LE(46);
    expect(bmpBlueData).to.have.property('name');
    expect(bmpBlueData.bmpTypeField).to.eql('BM');
    expect(bmpBlueData.numBytes).to.eql(30054);
    expect(bmpBlueData.pixelImgStart).to.eql(54);
    expect(bmpBlueData.numColors).to.eql(0);
  });
});

describe('redBuffer test ', () => {
  it('should read meta header data from red buffer', () => {
    var bmpRedData = {};
    bmpRedData.name = process.argv[2];
    bmpRedData.bmpTypeField = bmpRedBuf.toString('ascii', 0, 2);
    bmpRedData.numBytes = bmpRedBuf.readInt32LE(2);
    bmpRedData.pixelImgStart = bmpRedBuf.readInt32LE(10);
    bmpRedData.numColors = bmpRedBuf.readInt32LE(46);
    expect(bmpRedData).to.have.property('name');
    expect(bmpRedData.bmpTypeField).to.eql('BM');
    expect(bmpRedData.numBytes).to.eql(30054);
    expect(bmpRedData.pixelImgStart).to.eql(54);
    expect(bmpRedData.numColors).to.eql(0);
  });
});
