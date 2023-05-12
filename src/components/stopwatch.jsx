import React, { useEffect, useState } from 'react'

function Stopwatch ({ setShowLap, setLap, lap }) {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn) {
        setTime(prevTime => prevTime + 10)
      } else {
        clearInterval(interval)
      }
    }, 10)

    return () => clearInterval(interval)
  }, [timerOn])

  const handleStart = () => {
    setTimerOn(true)
    setLap([])
  }

  const handleLap = () => {
    setShowLap(true)
    setCounter(prev => prev + 1)
    setLap(prevLap => [...prevLap, { n: counter, lap: time }])
  }

  const handleReset = () => {
    setTime(0)
    setTimerOn(false)
    setLap([])
    setShowLap(false)
    setCounter(1)
    console.log(lap)
  }

  return (
    <section className='watch'>
      <div>
        <span className='watch-text'>
          {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
        </span>
        <span className='watch-text'>
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className='watch-text'>
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span className='watch-text'>
          {('0' + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div>
        {!timerOn && time === 0 && (
          <button className='btn' onClick={handleStart}>
            Start
          </button>
        )}
        {timerOn && (
          <button className='btn' onClick={() => setTimerOn(false)}>
            pause
          </button>
        )}
        {timerOn && (
          <button className='btn' onClick={handleLap}>
            Lap
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className='btn' onClick={() => setTimerOn(true)}>
            Resume
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className='btn' onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </section>
  )
}

export default Stopwatch
