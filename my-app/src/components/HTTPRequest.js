import React, { Component } from 'react';
import axios from 'axios';

export class HTTPRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            error: null
        };
    }
    componentDidMount() {
        console.log('component mounted')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({
                // javascript built in method isArray() to check if the response data is already a array
                posts: Array.isArray(response.data)
                // sets post to response.data
                ? response.data
                // otherwise manually put response.data into a array
                : [response.data]
            })
        })
        // catch errors
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }
    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>Posts</h2>
                {
                    posts.length ? (
                        posts.map(post => (
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By user id:{post.userid}</h4>
                                <p>{post.body}</p>
                                <hr/>
                            </div>
                        ))
                    ) : (
                        // check for error
                        this.state.error
                        // if error display the error
                        ? <p>{this.state.error}</p>
                        // otherwise 
                        : <h4>Loading Posts...</h4>
                    )
                }
            </div>
        );
    }
}

export default HTTPRequest;