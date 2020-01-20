import React from "react";

export default function About() {
    return (
        // instead of using <div> using React.Fragment>
        <React.Fragment>
            <h2>About</h2>
            <p>
                This is the TodoList app v1.0.0. It is part of a React crash
                course.
            </p>
        </React.Fragment>
    );
}
