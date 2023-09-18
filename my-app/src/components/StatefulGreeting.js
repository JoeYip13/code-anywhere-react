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
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}{this.props.name}, {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefulGreeting;