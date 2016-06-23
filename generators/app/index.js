'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var helper = require('../../helper');

module.exports = yeoman.Base.extend({
  prompting: function() {
    this.log(yosay(
      'Welcome to the bedazzling ' + chalk.red('generator-ng-flash') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'name',
        message: 'Project name?',
        default: this.appname,
        filter: (name) => {
          return _.kebabCase(name);
        }
      },{
        type: 'input',
        name: 'initials',
        message: 'Angular app module name?',
        default: 'app'
      }, {
        type: 'input',
        name: 'author',
        message: 'Author name?',
        default: 'author'
      }, {
        type: 'list',
        name: 'license',
        message: 'Select license?',
        choices: [
          'MIT',
          'ISC',
          'Apache-2.0',
          'BSD'
        ],
        default: 'MIT'
      }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    var files = helper.files(__dirname + '/templates');
    _.each(files, (file) => {
      var path = file.split('templates/')[1];
      if (path.match(/png|jpe?g|gif/))
        this.fs.copy(
          this.templatePath(path),
          this.destinationPath(path)
        );
      else
        this.fs.copyTpl(
          this.templatePath(path),
          this.destinationPath(path),
          {
            name: this.props.name,
            initials: this.props.initials,
            author: this.props.author,
            license: this.props.license
          }
        );
    });
  },

  install: function() {
    this.npmInstall();
  }
});
