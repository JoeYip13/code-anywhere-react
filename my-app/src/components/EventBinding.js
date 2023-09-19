import React from "react";

// Class components use 'this.props' to access props in a stateful component, 
// we need to refer to them as part of the class by using the 'this' keyword

// Event Binding - methods are not automatically bound to the class itself
// 4 different ways to bind event handler to methods
class EventBinding extends React.Component {

    // contructors always take on this form 
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
        // 3. Bind the event handler in the constructor
        this.handleClick = this.handleClick.bind(this)
    }
    // handler no arrow function
    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye",
    //     });
    //     console.log(
    //         this.state.introduction
    //     );
    // }

    // 4. define the handler as an arrow function
    handleClick = () => {
        this.setState({
            introduction: "Goodbye",
        });
        console.log(
            this.state.introduction
        );
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                {/* 1. add arrow function in the render method add parentheses 
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>*/}
                

                {/* 2. call .bind method on the handler with 'this'
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.buttonText}
                </button>*/}

                {/* 3. When using bind in the constructor 
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>*/}

                {/* 4. using arrow function in handler we can keep onClick={this.handleClick} */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        );
    }

}

export default EventBinding;