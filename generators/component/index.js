'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var helper = require('../../helper');
var fs = require('fs');

module.exports = yeoman.Base.extend({
  prompting: function() {
    this.log(yosay(
      chalk.red('generator-ng-flash') + ' component generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Component name?',
      filter: (str) => {
        return _.camelCase(str);
      }
    }, {
      type: 'input',
      name: 'initials',
      message: 'App module name?',
      filter: (str) => {
        return _.camelCase(str);
      }
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    const callingPath = this.destinationRoot();
    const newComponentPath = `${callingPath}/${this.props.name}`;
    const componentName = this.props.name;
    const initials = this.props.initials;
    const templatePath = `${__dirname}/${helper.templateFolder}`;

    // Appending new component entry in component.js
    helper.appendComponent(callingPath, componentName);

    // Create new component folder
    mkdir(newComponentPath);

    // Get template files
    var paths = helper.files(templatePath);

    // Copying files
    _.each(paths, (path) => {
      copy.call(this, helper.getFileName(path));
    });

    function copy(fileName) {
      this.fs.copyTpl(
        this.templatePath(fileName),
        this.destinationPath(`${componentName}/${fileName.replace(helper.templateName, componentName)}`),
        {
          name: componentName,
          capitalName: _.capitalize(componentName),
          appModule: initials
        }
      );
    }

    function mkdir(path) {
      fs.mkdirSync(path);
    }

  },

  install: function() {
  }
});
