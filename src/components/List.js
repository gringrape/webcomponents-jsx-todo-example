export default class List extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  handleClick(i) {
    this.ondelete(i);
  }

  render() {
    const element = (
      <ul>
        {this.todos.map((todo, index) => (
          <li>
            {todo}
            <button
              type="button"
              onclick={() => this.handleClick(index)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    );

    this.textContent = '';
    this.appendChild(element);
  }
}

customElements.define('todo-list', List);
