import { useState } from 'react'
import Accrodian from './Components/Accordian'
import Geolocation from './Components/Geolocation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Accrodian/>
      {/* <Geolocation/> */}
    </div>
  )
}

export default App
