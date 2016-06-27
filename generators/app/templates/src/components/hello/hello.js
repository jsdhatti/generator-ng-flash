import angular from 'angular';
import service from './hello.service.js';
import constants from './hello.constants.js';
import component from './hello.component.js';

export default  angular.module('<%= initials %>.hello', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('hello', {
        url: '/hello',
        template: '<hello></hello>'
      });
  })
  .constant('helloConstants', constants)
  .service('HelloService', service)
  .component('hello', component);
