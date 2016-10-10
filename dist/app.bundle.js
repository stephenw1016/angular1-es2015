webpackJsonp([0],[
/* 0 */
/*!************************!*\
  !*** ./app/src/app.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(/*! angular */ 1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(/*! angular-ui-router */ 3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _todo = __webpack_require__(/*! ./todo/todo.module */ 11);
	
	var _todo2 = _interopRequireDefault(_todo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var root = _angular2.default.module('app', [_angularUiRouter2.default, _todo2.default]).name;
	
	exports.default = root;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!********************************************!*\
  !*** ./app/src/todo/todo-app.component.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TODO_APP_NAME = exports.TODO_APP_NAME = 'todoApp';
	
	var TodoAppComponent = exports.TodoAppComponent = {
	  templateUrl: 'src/todo/todo-app.html',
	  bindings: {
	    appName: '<'
	  },
	  controller: function controller() {}
	};

/***/ },
/* 7 */,
/* 8 */
/*!*********************************************!*\
  !*** ./app/src/todo/todo-list.component.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TODO_LIST_NAME = exports.TODO_LIST_NAME = 'todoList';
	
	var TodoListComponent = exports.TodoListComponent = {
	  templateUrl: 'src/todo/todo-list.html',
	  bindings: {
	    todos: '<'
	  },
	  controller: function controller(TodoService) {
	    this.todos = TodoService.getAll();
	  }
	};

/***/ },
/* 9 */,
/* 10 */
/*!****************************************!*\
  !*** ./app/src/todo/todo.component.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TODO_NAME = exports.TODO_NAME = 'todo';
	
	var TodoComponent = exports.TodoComponent = {
	  templateUrl: 'src/todo/todo.html',
	  bindings: {
	    todo: '<'
	  },
	  controller: function controller() {
	    var $ctrl = this;
	
	    // $onInit = () => {
	    //   $ctrl.id = todo.id;
	    //   $ctrl.name = todo.name;
	    //   $ctrl.isDone = todo.isDone;
	    // }
	  }
	};

/***/ },
/* 11 */
/*!*************************************!*\
  !*** ./app/src/todo/todo.module.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(/*! angular */ 1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _todoApp = __webpack_require__(/*! ./todo-app.component */ 6);
	
	var _todoList = __webpack_require__(/*! ./todo-list.component */ 8);
	
	var _todo = __webpack_require__(/*! ./todo.component */ 10);
	
	var _todo2 = __webpack_require__(/*! ./todo.service */ 12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var todoModule = _angular2.default.module('app.todo', []).component(_todoApp.TODO_APP_NAME, _todoApp.TodoAppComponent).component(_todoList.TODO_LIST_NAME, _todoList.TodoListComponent).component(_todo.TODO_NAME, _todo.TodoComponent).service(_todo2.TODO_SERVICE_NAME, _todo2.TodoService).name;
	
	exports.default = todoModule;

/***/ },
/* 12 */
/*!**************************************!*\
  !*** ./app/src/todo/todo.service.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TODO_SERVICE_NAME = exports.TODO_SERVICE_NAME = 'TodoService';
	
	var TodoService = exports.TodoService = function () {
	  function TodoService() {
	    _classCallCheck(this, TodoService);
	  }
	
	  _createClass(TodoService, [{
	    key: 'getAll',
	    value: function getAll() {
	      return [{ id: 1, name: 'test1', isDone: false }, { id: 2, name: 'test2', isDone: true }, { id: 3, name: 'test3', isDone: false }];
	    }
	  }]);

	  return TodoService;
	}();

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map