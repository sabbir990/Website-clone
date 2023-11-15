import React from 'react'
import '../index.css'

export default function Section13({heading}) {
  return (
    <div className='section13-parent'>
        <div className='section13-image'>
            <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Dots_Bob-Meijer_RGB.png" alt="..." className='img-bg-section13'/>
            <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-10.png" alt="person" className='img-section13-person'/>
        </div>
        <div className='section13-info'>
            <h1>{heading}</h1>
            <h4>➡️ I am 100% specialized in Google Ads.</h4>
            <p>I specialize in Google Ads and don’t do anything else. I understand the playing field like no other and know what works.</p><br />

            <h4>➡️ I don’t back down from anything</h4>
            <p>I go further than my competitors and love challenges. Profit tracking, post-click optimizations – nothing is too crazy for me.</p><br />

            <h4>➡️ No purple crocodiles or small print</h4>
            <p>I don’t work with long-term contracts, because I hate them myself. And everything I deliver is your property.</p>
            <br />

            <h4>➡️ I’m always there for you</h4>
            <p>I work for a limited number of clients and am not overcrowded. This allows me to give you the attention you deserve.</p>

        </div>
    </div>
  )
}
