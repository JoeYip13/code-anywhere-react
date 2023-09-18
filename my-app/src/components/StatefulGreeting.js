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
    // define new method handleClick
    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, ()=>{
            // callback function, this code will run after setState completes
            console.log("new state", this.state.introduction);
            console.log("new state", this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);

    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}{this.props.name}, {this.props.greeting}</h1>
                {/* add onClick attribute */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefulGreeting;