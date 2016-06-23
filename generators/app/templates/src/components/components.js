import angular from 'angular';
import Hello from './hello/hello.js';

export default angular.module('<%= initials %>.components', [
  Hello.name
]);
