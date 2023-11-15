import React from 'react'
import '../index.css'

export default function Section16({getPageNameFromSection16Btn}) {
  const handleWorkWithMeBtn = () => {
    getPageNameFromSection16Btn("Contact")
  }
  return (
    <div className='section16-parent'>
        <div className='section16-info'>
            <h1>Your Google Ads campaigns perform better with me behind the wheel.</h1>
            <p>I specialize in Google Ads, which means I get better results than generalists. I do everything in my power to achieve your online goals. Be it more leads or sales, a higher ROI, or lower CAC. During my work, I focus on concrete goals and hard numbers. Vanity metrics are not my thing.</p>
            <button onClick={handleWorkWithMeBtn}>Work with me</button>
        </div>
        <div className='section16-image'>
            <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-4.png" alt="person" />
        </div>
    </div>
  )
}
