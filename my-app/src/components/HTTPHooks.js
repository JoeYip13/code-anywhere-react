import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);
    const postToApi = () => {
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
                setPostMessage(response.status === 201
                    ? `Success title ${response.data.title}`
                    : `Failed`
                )
            });
    };
    useEffect(() => {
        console.log('In operation');
        axios.get('https://jsonplaceholder.typicode.com/posts/101')
            .then(response => {
                console.log(response);
                const data = Array.isArray(response.data)
                    // sets post to response.data
                    ? response.data
                    // otherwise manually put response.data into a array
                    : [response.data]
                setPosts(data);
            })
            // catch errors
            .catch(error => {
                setError(error.message);
            });
    }, []);
    return (
        <div>
            <button onClick={postToApi}>
                Create Post
            </button>
            <p>{postMessage}</p>
            <h2>Posts</h2>
            {
                posts.length ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.id}. {post.title}</h2>
                            <h4>By user id:{post.userid}</h4>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    ))
                ) : (
                    // check for error
                    error
                        // if error display the error
                        ? <p>{error}</p>
                        // otherwise 
                        : <h4>Loading Posts...</h4>
                )
            }
        </div>
    );
}

export default HTTPHooks;