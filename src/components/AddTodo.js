import React, { Component } from "react";

export class AddTodo extends Component {
    state = {
        title: ""
    };

    render() {
        return (
            <form style={{ display: "flex" }}>
                <input
                    type="text"
                    name="title"
                    stely={{ flex: "10", padding: "5px" }}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: "1" }}
                />
            </form>
        );
    }
}

export default AddTodo;
