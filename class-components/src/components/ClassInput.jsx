import { Component } from 'react';
import Count from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editingIndex: null,
      editText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDelete(index) {
    this.setState((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    }));
  }

  handleEdit(index) {
    this.setState((state) => ({
      editingIndex: index,
      editText: state.todos[index],
    }));
  }

  handleEditChange = (e) => {
    this.setState({ editText: e.target.value });
  };

  handleResubmit = (index) => {
    this.setState((state) => ({
      todos: state.todos.map((todo, i) =>
        i === index ? state.editText : todo,
      ),
      editingIndex: null,
      editText: '',
    }));
  };

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo, index) =>
            this.state.editingIndex === index ? (
              <li key={index}>
                <input
                  type="text"
                  value={this.state.editText}
                  onChange={this.handleEditChange}
                />
                <button onClick={() => this.handleResubmit(index)}>
                  Resubmit
                </button>
              </li>
            ) : (
              <li key={index}>
                {todo}
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </li>
            ),
          )}
        </ul>
        <Count todos={this.state.todos} />
      </section>
    );
  }
}

export default ClassInput;
