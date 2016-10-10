export const TODO_LIST_NAME = 'todoList';

export const TodoListComponent = {
  templateUrl: 'src/todo/todo-list.html',
  bindings: {
    todos: '<'
  },
  controller(TodoService) {
    this.todos = TodoService.getAll();
  }
};