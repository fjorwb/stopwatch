import { useContext } from 'react'
import './App.css'

import { Context } from './context/context'

import Stopwatch from './components/stopwatch'
import Laps from './components/laps'

export default function App () {
  const { showLap } = useContext(Context)

  return (
    <>
      <h1 className='title'>STOPWATCH</h1>
      <div className='container'>
        <Stopwatch />
        {showLap && <Laps />}
      </div>
    </>
  )
}
