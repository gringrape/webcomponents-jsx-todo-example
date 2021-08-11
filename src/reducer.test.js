import {
  addTodo,
  deleteTodo,
} from './reducer';

describe('reducer', () => {
  test('addTodo', () => {
    const state = { todos: [] };

    const { todos } = addTodo(
      state,
      '밥 먹기',
    );

    expect(todos[0]).toBe('밥 먹기');
  });

  test('deleteTodo', () => {
    const state = { todos: ['밥 먹기'] };

    const { todos } = deleteTodo(
      state, 0,
    );

    expect(todos).toHaveLength(0);
  });
});
