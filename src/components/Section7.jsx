import React from 'react'
import '../index.css'

export default function Section7({getPageNameFromSection7Btn}) {
  const handleSection7Btn = () => {
    getPageNameFromSection7Btn("Contact")
  }
  return (
    <div className='section7-parent'>
        <h1>Ready To Grow?</h1>
        <p>Let’s talk about the results I can get for your business. Free of jargon and without bullshit <br /> bingo.</p>
        <button onClick={handleSection7Btn}>Get in touch</button>
    </div>
  )
}
