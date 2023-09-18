import React from "react";

// Class components use 'this.props' to access props in a stateful component, 
// we need to refer to them as part of the class by using the 'this' keyword

class StatefulGreeting extends React.Component {

    // contructors always take on this form 
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }
    // define new method handleClick
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            };
        });
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);
            return {
                count: prevState.count + 1
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}{this.props.name}, {this.props.greeting}</h1>
                {/* add onClick attribute */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
                <p>You've clicked {this.state.count} times</p>

            </div>
        );
    }

}

export default StatefulGreeting;