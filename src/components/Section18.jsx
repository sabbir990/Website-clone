import React from 'react'
import '../index.css'

export default function Section18() {
  const handleSparSection18 = () => {
    window.scrollTo(0, 3750)
  }
  return (
    <div className='section18-parent'>
        <div className='section18-info'>
            <h1>Your <span>Google Ads</span> sparring partner & coach</h1><br /><br />
            <p>Have you mastered the basics of Google Ads, and are you ready to go deeper? Or are you simply looking for a specialist with whom you can spar on a high level? I am here for you!</p><br /><br />
            <button onClick={handleSparSection18}>I want to spar</button>
        </div>
        <div className='section18-image'>
            <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-2-1.png" alt="Bob Meijer" />
        </div>
    </div>
  )
}
