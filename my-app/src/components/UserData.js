import React from 'react'
// stateless functional component just displaying static information that wont change once its rendered
function UserData(props) { // We pass props into the function
  return (
    <div>
        <h1>{props.isLoaded ? 'Data loaded!' : 'Loading...'}</h1>
    </div>
  )
}

export default UserData