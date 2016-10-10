export const TODO_SERVICE_NAME = 'TodoService';

export class TodoService {
  constructor() {

  }

  getAll() {
    return [
      { id: 1, name: 'test1', isDone: false },
      { id: 2, name: 'test2', isDone: true },
      { id: 3, name: 'test3', isDone: false }
    ];
  }
}
