import React from "react";

// Class components use 'this.props' to access props in a stateful component, 
// we need to refer to them as part of the class by using the 'this' keyword

class StatefulGreeting extends React.Component {
    render() {
        return <h1>Hello {this.props.name}, {this.props.greeting}</h1>
    }

}

export default StatefulGreeting;