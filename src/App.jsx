import { useState } from 'react'
import './App.css'

import Stopwatch from './components/stopwatch'
import Laps from './components/laps'

function App () {
  const [lap, setLap] = useState([])
  const [showLap, setShowLap] = useState(false)

  return (
    <>
      <h1 className='title'>STOPWATCH</h1>
      <div className='container'>
        <Stopwatch setShowLap={setShowLap} setLap={setLap} lap={lap} />
        {showLap && <Laps lap={lap} />}
      </div>
    </>
  )
}

export default App
