import './App.css'

import Stopwatch from './components/stopwatch'
import Laps from './components/laps'

export default function App () {
  return (
    <>
      <h1 className='title'>STOPWATCH</h1>
      <div className='container'>
        <Stopwatch />
        <Laps />
      </div>
    </>
  )
}
