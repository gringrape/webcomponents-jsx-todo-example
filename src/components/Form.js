export default class Form extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  handleSubmit() {
    const input = this.querySelector('#input-todo');
    const { value: todo } = input;

    if (!todo) {
      return;
    }

    this.onsubmit(todo);
    input.value = '';
  }

  render() {
    const element = (
      <form>
        <label>
          할 일
          <input type="text" id="input-todo" />
        </label>
        <button
          type="button"
          onclick={this.handleSubmit.bind(this)}
        >
          입력
        </button>
      </form>
    );

    this.textContent = '';
    this.appendChild(element);
  }
}

customElements.define('todo-form', Form);
