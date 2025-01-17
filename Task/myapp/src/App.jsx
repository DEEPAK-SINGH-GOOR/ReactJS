import { useState } from 'react'
import Task from './Task'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Task/>
   </div>
  )
}

export default App
