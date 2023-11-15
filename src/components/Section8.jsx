import React from 'react'
import '../index.css'

export default function Section8({getPageNameFromOutsourceGoogleAds, getPageNameFromGoogleAdsAudit, getPageNameFromGoogleAdsCoaching, getPageNameFromAboutMe, getPageNameFromContact}) {
    const handleOutsourceGoogleAds = () => {
        getPageNameFromOutsourceGoogleAds("Section1 button")
    }
    const handleGoogleAdsAudit = () => {
        getPageNameFromGoogleAdsAudit("Google Ads audit")
    }
    const handleGoogleAdsCoaching = () => {
        getPageNameFromGoogleAdsCoaching("Section4 spar")
    }
    const handleAboutMe = () => {
        getPageNameFromAboutMe("About Me")
    }
    const handleContact = () => {
        getPageNameFromContact("Contact")
    }
    return (
        <>
            <div className='section8-parent'>
                <div className='infoline-1'>
                    <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_DIA_RGB.png" alt="logo-image" className="section8-image" />
                    <p>Nijstadstraat 2</p>
                    <p>7478DJ Diepenheim</p>
                    <p>Nedtherlands</p>
                    <br />
                    <p>KvK-number: 78449227</p>
                    <p>Btw-identificationnumber:</p>
                    <p>NL861402728B01</p>
                </div>
                <div className='infoline-2'>
                    <h3>Google Ads services</h3><br />
                    <a onClick={handleOutsourceGoogleAds}>Outsource Google Ads</a><br />
                    <a onClick={handleGoogleAdsAudit}>Google Ads Audit</a><br />
                    <a onClick={handleGoogleAdsCoaching}>Google Ads Coaching</a><br />
                </div>
                <div className='infoline-3'>
                    <h3>Recources</h3><br />
                    <a href='https://www.linkedin.com/in/bmmeijer/' target='_blank'>Visit my LinkedIn</a><br />
                    <a href='https://www.ppcmastery.com/community' target='_blank'>Google Ads Community</a><br />
                    <a href='https://www.ppcmastery.com/blog/' target='_blank'>Google Ads Newsletter</a><br />
                    <a href='https://www.ppcdepodcast.nl' target='_blank'>Google Ads Podcast</a><br />
                </div>
                <div className='infoline-4'>
                    <h3>General</h3><br />
                    <a onClick={handleAboutMe}>About Me</a><br />
                    <a onClick={handleContact}>Contact</a><br />
                    <a>Terms & Conditions</a><br />
                    <a>Privacy Satetment</a><br />
                    <a>Cookie Policy</a><br />
                </div>
            </div>
            <div className='section8-underline'>

            </div>
            <div className='section8-brand'>
                <div className='section8-brand-google'>
                    <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/Google-partner.png" alt="google" />
                </div>
                <div className='section8-brand-microsoft'>
                    <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/Microsoft-partner.png" alt="microsoft" />
                </div>
            </div>
        </>
    )
}
