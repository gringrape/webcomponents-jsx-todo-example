import '../Element';

import {
  fireEvent,
  queryByLabelText,
  queryByText,
  getByLabelText,
  getByText,
} from '@testing-library/dom';

import Form from './Form';

describe('App', () => {
  const handleSubmit = jest.fn();

  function renderForm() {
    const form = new Form();

    form.onsubmit = handleSubmit;

    document.body.appendChild(form);
    return form;
  }

  beforeEach(() => {
    handleSubmit.mockClear();

    document.body.textContent = '';
  });

  it('renders input control', () => {
    const form = renderForm();

    expect(queryByLabelText(form, '할 일')).not.toBeNull();
  });

  it('renders submit button', () => {
    const form = renderForm();

    expect(queryByText(form, '입력')).not.toBeNull();
  });

  it('listens submit event', () => {
    const form = renderForm();

    fireEvent.change(getByLabelText(form, '할 일'), {
      target: { value: '밥 먹기' },
    });
    fireEvent.click(getByText(form, '입력'));

    expect(handleSubmit).toBeCalledWith('밥 먹기');
  });
});
