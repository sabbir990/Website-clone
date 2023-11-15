import React, { useState } from 'react'
import '../index.css'
import { FaArrowDown } from 'react-icons/fa'

export default function Navigation({getPageName, getPageNameFromNavigationDropdown2nd, getPageNameFromNavigationDropdown3rd, getPageNameFromNavigationDropdown4th}) {
    const [isUsaFlag, setIsUsaFlag] = useState(true)
    const handleToHomeClick = () => {
        getPageName("Home")
    }
    const handleToAboutMeClick = () => {
        getPageName("About Me")
    }
    const handleToContactClick = () => {
        getPageName("Contact")
    }
    const handleToGoogleAdsRecourcesClick = () => {
        getPageName("Google Ads Recources")
    }
    const handleFlagClick = () => {
        setIsUsaFlag(!isUsaFlag)
    }
    const handleGoogleAdsCoachingFromNavigation = () => {
        getPageNameFromNavigationDropdown2nd("Section4 spar")
    }
    const handleGoogleAdsAuditFromNavigation = () => {
        getPageNameFromNavigationDropdown3rd("Google Ads audit")
    }
    const handleOutsourceGoogleAdsFromNavigation = () => {
        getPageNameFromNavigationDropdown4th("Section1 button")
    }
    return (
        <div className='navigation-parent'>
            <div className='logo-div'>
                <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_RGB.png" className="attachment-full size-full wp-image-39 logo-image" alt="logo" srcSet="https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_RGB.png 1400w, https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_RGB-300x81.png 300w, https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_RGB-1024x278.png 1024w, https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_RGB-768x208.png 768w" />
            </div>
            <div className='navigation-div'>
                <ul>
                    <li><a onClick={handleToHomeClick}>Home</a></li>
                    <li className='dropdown'>
                        <a className='dropdown-item'>Google Ads Services <span style={{ margin: '5px' }}><FaArrowDown /></span></a>
                        <div className='dropdown-content'>
                            <a className='dropdown-item' href='https://www.ppcmastery.com'>Google Ads Courses</a>
                            <a className='dropdown-item' onClick={handleGoogleAdsCoachingFromNavigation}>Google Ads Coaching</a>
                            <a className='dropdown-item' onClick={handleGoogleAdsAuditFromNavigation}>Google Ads Audit</a>
                            <a className='dropdown-item' onClick={handleOutsourceGoogleAdsFromNavigation}>Outsourcing Google Ads</a>
                        </div>
                    </li>
                    <li><a onClick={handleToGoogleAdsRecourcesClick}>Google Ads Recources</a></li>
                    <li><a onClick={handleToAboutMeClick}>About Me</a></li>
                    <li><a onClick={handleToContactClick}>Contact</a></li>
                    <li><a><span><img src={isUsaFlag ? "https://bobmeijer.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" : "https://bobmeijer.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/nl.png"} alt="flag" onClick={handleFlagClick}/></span> <span>{isUsaFlag ? 'US' : "NL"}</span></a ></li>
                </ul>
            </div>
        </div>
    )
}
