import React from 'react'

function ConditonalRenderingFunctional(props) {
  return (
    <div>
        <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>
    </div>
  )
}

export default ConditonalRenderingFunctional