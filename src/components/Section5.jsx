import React from 'react'
import '../index.css'

export default function Section5({getPageNameFromSection5Btn}) {
  const handleSection5Btn = () => {
    getPageNameFromSection5Btn("Contact")
    console.log('hello')
  }
  return (
    <div className='section5-parent'>
        <div className='section5-info'>
            <h4>Work with me</h4>
            <h1>I get the most out of it.</h1>
            <p>Let’s talk about the results I can get for your business. Free of jargon and without bullshit bingo.</p>
            <button onClick={handleSection5Btn}>Get a touch</button>
        </div>
        <div className='section5-image'>
            <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijer.nl-homepage-v5-1.png" alt="Bob Meijer" />
        </div>
    </div>
  )
}
