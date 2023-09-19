import React from 'react'
// stateless functional component just displaying static information that wont change once its rendered
function UserMessage(props) { // We pass props into the function
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
            </div>
            ) : (
            <p>Please sign in</p>
            )
        }
    </div>
  )
}

export default UserMessage