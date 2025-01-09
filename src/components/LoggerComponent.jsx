//this is variation 1 type 
//meaning it will run on each render

import React, { useState, useEffect } from 'react';

function LoggerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered or count changed:', count);
    alert(`this will run on each render`)
  });
  //runs on every render

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


export default LoggerComponent