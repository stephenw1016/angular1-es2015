import angular from 'angular';
import uiRouter from 'angular-ui-router';

import todoModule from './todo/todo.module';

const root = angular
  .module('app', [
    uiRouter,
    todoModule
  ])
  .name;

export default root;