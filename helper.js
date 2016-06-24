'use strict';

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports.files = getFiles;

function getFiles(dirPath, files) {
  files = files || [];
  var dir = fs.readdirSync(dirPath);
  _.each(dir, (file) => {
    var name = `${dirPath}/${file}`;
    console.log(name);
    if (fs.statSync(name).isDirectory())
      getFiles(name, files);
    else
      files.push(name);
  });
  return files;
}

function capitalize(str) {
  return str.charAt(0) + str.slice(1);
}
