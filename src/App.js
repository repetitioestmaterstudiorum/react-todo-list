import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response =>
        this.setState({
          todos: response.data.filter(element => {
            return element.completed === false; // show only not yet completed tasks
          })
        })
      );
  }

  // toggle completed (state)
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed; // toggle bool
        }
        return todo;
      })
    });
  };

  // delete todo
  delTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  };

  // add todo
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title, // es6 doesn need "title: title"
        completed: false
      })
      .then(response =>
        this.setState({ todos: [...this.state.todos, response.data] })
      );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
