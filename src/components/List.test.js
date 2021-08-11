import { fireEvent, getAllByText } from '@testing-library/dom';

import '../Element';

import List from './List.js';

describe('UserList', () => {
  const handleClick = jest.fn();

  function renderList() {
    const list = new List();

    list.todos = ['밥 먹기'];
    list.ondelete = handleClick;

    document.body.appendChild(list);
    return list;
  }

  beforeEach(() => {
    handleClick.mockClear();

    document.body.textContent = '';
  });

  it('renders todos', () => {
    const list = renderList();

    expect(list).toHaveTextContent('밥 먹기');
  });

  it('listens delete event', () => {
    const list = renderList();

    fireEvent.click(getAllByText(list, '삭제')[0]);

    expect(handleClick).toBeCalled();
  });
});
