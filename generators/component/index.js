'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var helper = require('../../helper');

module.exports = yeoman.Base.extend({
  prompting: function() {
    this.log(yosay(
      'Welcome to the bedazzling ' + chalk.red('generator-ng-flash') + ' component generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'name',
        message: 'Component name?',
        filter: (name) => {
          return _.camelCase(name);
        }
      }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    var files = helper.files(__dirname + '/templates');
    _.each(files, (file) => {
      var path = file.split('templates/')[1];
        this.fs.copyTpl(
          this.templatePath(path),
          this.destinationPath(outputFile(path, this.props.name)),
          {
            name: this.props.name,
            capitalName: _.capitalize(this.props.name)
          }
        );
    });

    function outputFile(path, componentName) {
      var tmp = path.split('.');
      tmp[0] = componentName;
      return tmp.join('.');
    }
  },

  install: function() {
  }
});
