const path = require('path');
const md5 = require('md5');
const fs = require('fs');

function getPath(asset, type) {
	return path.resolve(process.cwd(), 'assets', type, asset['path'], asset['name']);
};

function hashPath(asset, type) {

	var hash = md5(asset.originalname);
	var chunked = hash.match(/.{1,2}/g).slice(0,4).join('/');

    return path.join('./assets', type, chunked);
};

module.exports = {
    getPath,
    hashPath
}
