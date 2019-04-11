import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todoItems: [],
    text: ""
  };

  inputChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  btnClick = () => {
    this.state.todoItems.push(this.state.text);
    this.setState({ text: "" });
  };

  renderTodoItems = () => {
    if (this.state.todoItems.length > 0) {
      return (
        <div>
          <ul>
            {this.state.todoItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <input
          name="todo"
          onChange={this.inputChange}
          value={this.state.text}
        />
        <button onClick={this.btnClick}>Add</button>
        <br />
        {this.renderTodoItems()}
      </div>
    );
  }
}

export default App;
