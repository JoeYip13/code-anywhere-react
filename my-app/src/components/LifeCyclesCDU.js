import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('constructor called')
        
        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }
    updateGreeting = () => {
        console.log('update greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello!' ? 'Goodbye': 'Hello!'
            }
        })
    }
    componentDidUpdate() {
        // is called on every update, i.e change of props, change of state, parent re-render
        console.log('component updated')
    }
    render() {
        console.log('render method called')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                {/* pass parentGreeting prop to child component */}
                <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
            </div>
        )
    }
}

export default LifeCyclesCDU