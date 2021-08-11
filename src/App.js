import './components/Form';
import './components/List';

import {
  addTodo,
  deleteTodo,
} from './reducer';

export default class App extends HTMLElement {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  connectedCallback() {
    this.render();
  }

  setState(reducer) {
    const updatedState = reducer(this.state);
    if (updatedState === this.state) {
      return;
    }
    this.state = updatedState;
    this.render();
  }

  handleSubmitTodo(todo) {
    this.setState((state) => addTodo(state, todo));
  }

  handleDelete(index) {
    this.setState((state) => deleteTodo(state, index));
  }

  render() {
    const { todos } = this.state;

    const element = (
      <div>
        <h1>TODO List</h1>
        <todo-form
          onsubmit={this.handleSubmitTodo.bind(this)}
        />
        <todo-list
          todos={todos}
          ondelete={this.handleDelete.bind(this)}
        />
      </div>
    );

    this.textContent = '';
    this.appendChild(element);
  }
}

customElements.define('app-container', App);
