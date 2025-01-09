import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
  //const [count, setCount] = useState(0)
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  // useEffect(() => {
  //   alert("this will run on each render")
  // })
  
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  //variation 1: runs on every ender
  // useEffect(() => {
  //   alert(`the value of count is ${count}`)
  // })

  //variation 2: runs on first render (there is a dependency list)
  // useEffect(() => {
  //   alert("i will run only on first render")
  // }, [])

  //variation 3: we add a dependecy list
  // useEffect(() => {
  //   alert(`i will run every time count value is updated ${count}`)
  // }, [count])

  //variation4: multiple dependencies
  //if any of the dependency value is updated the useEffect will run
  // useEffect(() => {
  //   alert("I will run everytime count/total is updated")
  // }, [count, total])
  
  //variation 5: adding a cleanup function
  // useEffect(() => {
  //     alert("count ni navi value ui ma update thai gai")
  //   return () => {
  //     alert("count ni juni value ui ma thi hati gai")
  //   }
  // }, [count])
  
  
  


  // function handleCLick() {
  //   setCount(count+1);
  // }

  // function handleClickTotal() {
  //   setTotal(total+1);
  // }


  return (
    <>
      <div>
        {/* 
          this is an example of useState hook
        <Counter/> */}

        {/* below are the exapmle for useEffect hooks*/}

        {/* <p>counter value {count}</p>
        <p>total value {total}</p>
        <button onClick={handleCLick}>update count</button><br />
        <button onClick={handleClickTotal}>update total</button> */}

        {/* <LoggerComponent /> */}
        {/* <TimerComponent /> */}

        {/* <DataFetcher /> */}
        {/* <ResizeComponent /> */}
        {/* <MultiEffectComponent /> */}

      </div>
    </>
  )
}

export default App
