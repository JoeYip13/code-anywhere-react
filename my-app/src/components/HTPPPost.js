import React, { Component } from 'react';
import axios from 'axios';

export class HTPPPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiResponse: null
        };
    }
    postToApi = () => {
        // send post takes two parameters. Url we want to send to and an object with data
        // with axios we don't need to structure the POST data. It automaticallys structures the data for us
        // It is the API to validate the data we send
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello World',
                body: 'It works',
                userid: 123,
            }
        )
            .then(response => {
                this.setState({
                    apiResponse: response.data
                })
            });
    };
    render() {
        const {apiResponse} = this.state;
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    apiResponse
                    ? (<div>
                        <h1>{apiResponse.title}</h1>
                        <p>Post id: {apiResponse.id}</p>
                        <p>{apiResponse.body}</p>
                        <p>User id: {apiResponse.userid}</p>
                    </div>)
                    : (<p>Please click the button above</p>)
                }
            </div>
        );
    }
}

export default HTPPPost;