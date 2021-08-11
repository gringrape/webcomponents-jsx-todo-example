import './Element';

import {
  fireEvent,
  getByLabelText,
  getByText,
  getAllByText,
} from '@testing-library/dom';

import App from './App.js';

describe('App', () => {
  function renderApp() {
    const app = new App();
    document.body.appendChild(app);

    return app;
  }

  beforeEach(() => {
    document.body.textContent = '';
  });

  it('add todo', () => {
    const app = renderApp();

    fireEvent.change(getByLabelText(app, '할 일'), {
      target: { value: '밥 먹기' },
    });
    fireEvent.click(getByText(app, '입력'));

    expect(app).toHaveTextContent('밥 먹기');
  });

  it('delete todo', () => {
    const app = renderApp();

    fireEvent.change(getByLabelText(app, '할 일'), {
      target: { value: '밥 먹기' },
    });
    fireEvent.click(getByText(app, '입력'));

    expect(app).toHaveTextContent('밥 먹기');

    fireEvent.click(getAllByText(app, '삭제')[0]);

    expect(app).not.toHaveTextContent('밥 먹기');
  });
});
