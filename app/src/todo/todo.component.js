export const TODO_NAME = 'todo';

export const TodoComponent = {
  templateUrl: 'src/todo/todo.html',
  bindings: {
    todo: '<'
  },
  controller() {
    let $ctrl = this;

    // $onInit = () => {
    //   $ctrl.id = todo.id;
    //   $ctrl.name = todo.name;
    //   $ctrl.isDone = todo.isDone;
    // }
  }
};