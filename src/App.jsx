import { useState } from 'react'
import './App.css'
import PortfolioReplica from './Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <PortfolioReplica/>
    </div>
  )
}

export default App
