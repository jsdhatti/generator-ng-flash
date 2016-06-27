'use strict';

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
const templateFolder = 'templates';
const templateName = 'hello';

module.exports.files = getFiles;
module.exports.appendComponent = appendComponent;
module.exports.getFileName = getFileName;
module.exports.templateFolder = templateFolder;
module.exports.templateName = templateName;

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
  const fileName = 'components.js';
  const importText = `\r\nimport ${_.capitalize(name)} from './${name}/${name}.js'`;
  const moduleText = `,\r\n  ${_.capitalize(name)}.name\r\n]);`;
  let path = `${dirPath}/${fileName}`;
  let text;

  try{
    text = read(path);
  }catch(ex) {
    console.error(`file not found ${path} \nThis command will only run in ..src/components folder`);
    process.exit(1);
  }

  // Split by ; to break LOC in array to easily add new component import
  var file = text.split(';');

  // Adding import in second last place as last statement is module registration
  file.splice((file.length -2), 0, importText);

  // Now removing module registration closing end
  file = file.join(';').split(']);')[0];

  // Remove line break from last item in module registration and add new component entry
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

function getFileName(name) {
  return name.split(`${templateFolder}/`)[1];
}
