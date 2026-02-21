import React, { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0)


  const addValue = () => {
    setCount(count + 1);
  }
  const removeValue = () => {
    if (count <= 0) {
      count++;
    }
    setCount(count - 1)
  }


  return (
    <>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>
      <button onClick={addValue}>Increment</button><br /><br />
      <button onClick={removeValue}> Decrement</button>
    </>
  )
}

export default App