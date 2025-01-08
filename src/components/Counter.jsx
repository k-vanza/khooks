//this is an example of useState hook

import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);


  return (
    <div>
        <p>you have clicked {count} times</p>
        <button onClick={() => {setCount(count+1)}}>click me</button>
    </div>
  )
}

export default Counter