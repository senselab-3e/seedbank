const path = require('path');
const md5 = require('md5');
const fs = require('fs');

function getPath(asset, type) {
    return path.resolve(process.cwd(), 'assets', type, asset['path'], asset['name']);
};

function createPath(filename) {

    // var hash = md5(filename);
    // var chunked = hash.match(/.{1,2}/g).slice(0, 4).join('/');
    //return path.join('../assets/images/', chunked, filename); //potential doubleprinting of file name into what should only be the pathname
    // return path.join('../assets/images/', chunked);
    return ('./assets/images/');
};

module.exports = {
    getPath,
    createPath
}