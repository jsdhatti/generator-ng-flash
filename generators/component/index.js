'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var helper = require('../../helper');

module.exports = yeoman.Base.extend({
  prompting: function() {
    this.log(yosay(
      chalk.red('generator-ng-flash') + ' component generator!'
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
    var done = this.async();

    helper.appendComponent(this.destinationRoot(), this.props.name);

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

    done();

    function outputFile(path, componentName) {
      var name = path.split('.');
      name[0] = componentName;
      return name.join('.');
    }
  },

  install: function() {
  }
});
