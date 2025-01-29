import { useState } from 'react'
import Validation from './validation.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Validation/>
   </div>
  )
}

export default App
