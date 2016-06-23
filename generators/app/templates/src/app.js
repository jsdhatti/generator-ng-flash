import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import AppComponent from './app.component.js';
import Core from './core/core.js';
import Common from './common/common';
import Components from './components/components';
import './styles.scss';

angular.module('<%= initials %>', [
  Core.name,
  Common.name,
  Components.name
])
.directive('app', AppComponent);