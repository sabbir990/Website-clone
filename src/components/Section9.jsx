import React from 'react'
import '../index.css'

export default function Section9() {

    const handleTakeRecources = () => {
        window.scrollTo(0, 700)
    }
    return (
        <div className='section9-parent'>
            <div className='section9-info'>
                <h1>Google Ads Resources</h1>
                <h3>Podcasts, newsletters & more</h3>
                <p>I love sharing my knowledge with peers. So I share an interesting Google Ads tip every business day on my LinkedIn profile, create a PPC podcast with Luuk van Meijel and write a newsletter every week with Miles McNair from PPC Mastery.</p>
                <button onClick={handleTakeRecources}>Take me to resources</button>
            </div>
            <div className='section9-image'>
                <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-5-2.png" alt="person" />
            </div>
        </div>
    )
}
