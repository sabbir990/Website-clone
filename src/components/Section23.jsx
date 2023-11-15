import React from 'react'
import '../index.css'

export default function Section23() {
  const handleSection23Btn = () => {
    window.scrollTo(5000, 3750)
  }
  return (
    <div className='section23-parent'>
        <h1>Schedule a video call</h1><br />
        <p>Are you ready for a deepening session? Or are you simply looking for a Google Ads specialist with whom you can spar on a high level?<br /> I’m here for you!</p><br />
        <button onClick={handleSection23Btn}>Want to spar</button>
    </div>
  )
}
