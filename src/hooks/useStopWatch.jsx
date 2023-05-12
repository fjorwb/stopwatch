import { useEffect, useState, useContext } from 'react'

import { Context } from '../context/context.jsx'

export default function useStopWatch () {
  const { lap, setLap, setShowLap } = useContext(Context)

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
    setLap(prev => [...prev, { n: counter, lap: time }])
  }

  const handleReset = () => {
    setTime(0)
    setTimerOn(false)
    setLap([])
    setShowLap(false)
    setCounter(1)
    console.log(lap)
  }

  return {
    time,
    timerOn,
    handleStart,
    handleLap,
    handleReset,
    setTimerOn
  }
}
