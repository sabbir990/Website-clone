import React from 'react'
import '../index.css'

export default function Section1({getPageNameFromSection1}) {
  const handleSection1ButtonClick = () => {
    getPageNameFromSection1("Section1 button")
  }
  return (
    <div className='section1-parent'>
      <div className='section1-info'>
        <h1>Your Google Ads campaigns <span className="span-line">perform better</span> with me behind the wheel.</h1>
        <p>I’ll get the most out of your Google Ads campaigns or teach you the intricacies so you can do it yourself!</p>

        <button onClick={handleSection1ButtonClick}>I want to outsource Google Ads</button>
      </div>
      <div className='section1-image'>
        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-1-compressed.png" alt="person" className='person-image' />
      </div>
    </div>
  )
}
