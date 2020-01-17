import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}
            />
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;

/* doing this with a functional component rather than a class component could look like this, maybe: 

import React from "react";

function React(props) {
    return todos.map(todo => <h3>hi</h3>);
}

export default Todos;
*/
