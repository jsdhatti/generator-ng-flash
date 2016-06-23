import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {configuration, routingEvents} from './router.config.js';

export default angular.module('<%= initials %>.core', [
  uiRouter
])
  .config(configuration)
  .run(routingEvents);
