import React from 'react'

function Laps ({ lap }) {
  return (
    <section className='laps'>
      <h3 className='lap-title'>laps</h3>
      <div className='lap-container'>
        <div>
          {lap.map((time, ndx) => {
            return (
              <div key={ndx}>
                <span className='lap-text'>
                  {('0' + Math.floor((time.lap / 3600000) % 60)).slice(-2)}:
                </span>
                <span className='lap-text'>
                  {('0' + Math.floor((time.lap / 60000) % 60)).slice(-2)}:
                </span>
                <span className='lap-text'>
                  {('0' + Math.floor((time.lap / 1000) % 60)).slice(-2)}:
                </span>
                <span className='lap-text'>
                  {('0' + ((time.lap / 10) % 100)).slice(-2)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Laps
