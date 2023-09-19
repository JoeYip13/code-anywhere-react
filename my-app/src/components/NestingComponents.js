import React, { Component } from 'react'
import UserMessage from './UserMessage' // Import the UserMessage component
import UserData from './UserData' // Import the UserData component

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }
  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded} /> {/* render the component inside the render method include the prop isLoaded*/}
        <UserMessage isLoggedIn={this.state.isLoggedIn} /> {/* render the component inside the render method include the prop isLoggedIn */}
      </div>
    )
  }
}

export default NestingComponents