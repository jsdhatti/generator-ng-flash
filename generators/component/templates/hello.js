import angular from 'angular';
import service from './<%= name %>.service.js';
import constants from './<%= name %>.constants.js';
import component from './<%= name %>.component.js';

export default  angular.module('myApp.<%= name %>', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        template: '<<%= name %>></<%= name %>>'
      });
  })
  .constant('<%= name %>Constants', constants)
  .service('<%= capitalName %>Service', service)
  .component('<%= name %>', component);
