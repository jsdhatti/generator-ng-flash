'use strict';

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports.files = getFiles;
module.exports.appendComponent = appendComponent;

function getFiles(dirPath, files) {
  files = files || [];
  var dir = fs.readdirSync(dirPath);
  _.each(dir, (file) => {
    var name = `${dirPath}/${file}`;
    if (fs.statSync(name).isDirectory())
      getFiles(name, files);
    else
      files.push(name);
  });
  return files;
}

function appendComponent(dirPath, name) {
  name = name.toLowerCase();
  const fileName = "components.js";
  const importText = `\r\nimport ${_.capitalize(name)} from './${name}/${name}.js'`;
  const moduleText = `,\r\n  ${_.capitalize(name)}.name\r\n]);`;
  let path = dirPath + '/' + fileName;
  let text;

  try{
    text = read(path);
  }catch(ex) {
    console.error(`file not found ${path} \nThis command will only run in ..src/components folder`);
    process.exit(1);
  }

  var file = text.split(';');
  file.splice((file.length -2), 0, importText);
  file = file.join(';').split(']);')[0];

  let ind = file.lastIndexOf('\r\n');
  file = file.slice(0, ind) + moduleText;

  write(path, file);
}

function read(path) {
  return (fs.readFileSync(path)).toString();
}

function write(path, content) {
  fs.writeFileSync(path, content);
}
