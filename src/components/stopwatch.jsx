import useStopWatch from '../hooks/useStopWatch'

export default function Stopwatch ({ setShowLap }) {
  const { time, timerOn, handleStart, handleLap, handleReset, setTimerOn } =
    useStopWatch()

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
