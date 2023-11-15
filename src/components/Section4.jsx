import React from 'react'
import '../index.css'

export default function Section4({getPageNameFromSection4Btn1, getPageNameFromSection4Btn3}) {
    const handleKnowMore = () => {
        getPageNameFromSection4Btn1("Section1 button")
    }
    const handleSparClick = () => {
        getPageNameFromSection4Btn3("Section4 spar")
    }
    return (
        <div className='section4-parent'>
            <h1>Google Ads Services</h1>
            <div className='section4-underline'>

            </div>
            <div className='card-div'>
                <div className='card-1'>
                    <img decoding="async" loading="lazy" src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-uitbesteden_Bob-Meijer_RGB.png" alt="icon" srcSet="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-uitbesteden_Bob-Meijer_RGB.png 900w, https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-uitbesteden_Bob-Meijer_RGB-300x248.png 300w, https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-uitbesteden_Bob-Meijer_RGB-768x636.png 768w" />
                    <h2>Outsource Google Ads</h2>
                    <p>I get the most out of your Google Ads campaigns. Let me setup, manage and optimize your account.</p>
                    <button onClick={handleKnowMore}>I want to know more</button>
                </div>
                <div className='card-2'>
                    <img decoding="async" loading="lazy" src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-training_Bob-Meijer_RGB.png" className="attachment-full size-full wp-image-557" alt="icon" srcSet="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-training_Bob-Meijer_RGB.png 900w, https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-training_Bob-Meijer_RGB-300x248.png 300w, https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-training_Bob-Meijer_RGB-768x636.png 768w" />
                    <h2 className="elementor-heading-title elementor-size-default">Google Ads courses</h2>
                    <p>Learn proven Google Ads strategies, techniques, and clever hacks I use daily to grow my client’s accounts!</p><br /><br />
                    <a href="https://www.ppcmastery.com" target="_blank">I want to Google Ads</a>
                </div>
                <div className='card-3'>
                    <img decoding="async" loading="lazy" src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-coaching_Bob-Meijer_RGB.png" className="attachment-full size-full wp-image-555" alt="icon" srcSet="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-coaching_Bob-Meijer_RGB.png 900w, https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-coaching_Bob-Meijer_RGB-300x248.png 300w, https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-coaching_Bob-Meijer_RGB-768x636.png 768w" />
                    <h2 className="elementor-heading-title elementor-size-default">Google Ads coaching</h2>
                    <p>Do you have the basics of Google Ads under control and are ready to go deeper? I am here for you!</p>
                    <button onClick={handleSparClick}>I want to spar</button>
                </div>
            </div>
        </div>
    )
}
