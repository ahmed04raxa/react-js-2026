import React from 'react'
import "./App.css"
import Card from './Components/Card'

const App = () => {
  let myObj = {
    name: "ahmed",
    age: 21
  }
  return (
    <>
      <h1 className="text-3xl font-bold bg-green-700 text-center text-white">
        Tailwind Test
      </h1>
      <Card username="Ahmed Raza" />
      <Card github={"Github.com"}/>
    </>
  )
}

export default App