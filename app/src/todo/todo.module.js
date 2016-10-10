import angular from 'angular';

import { TodoAppComponent, TODO_APP_NAME } from './todo-app.component';
import { TodoListComponent, TODO_LIST_NAME } from './todo-list.component';
import { TodoComponent, TODO_NAME } from './todo.component';
import { TodoService, TODO_SERVICE_NAME } from './todo.service';


const todoModule = angular
  .module('app.todo', [])
  .component(TODO_APP_NAME, TodoAppComponent)
  .component(TODO_LIST_NAME, TodoListComponent)
  .component(TODO_NAME, TodoComponent)
  .service(TODO_SERVICE_NAME, TodoService)
  .name;

export default todoModule;