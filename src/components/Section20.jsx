import React from 'react'
import '../index.css'
import { FaArrowRight } from 'react-icons/fa'

export default function Section20() {
    return (
        <div className='section20-parent'>
            <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/21059054/cf34fe76.png" alt="profile" />
            <h4>Bob Meijer</h4>
            <p>Welcome to my scheduling page. Please <br /> follow the instructions to schedule an event.</p>

            <br />
            <br /><br />

            <div className='section20-package'>
                <div className='section20-small-package'>
                    <div>
                        <div style={{ width: '30px', backgroundColor: '#f8e436', border: '2px solid white', borderRadius: '50%' }}>

                        </div>
                        <h4>30 Minute Meeting - €175</h4>
                        <div>
                            <FaArrowRight />
                        </div>
                    </div>
                    <p>If you have some concerns or questions that you believe I can solve or answer pretty quickly, go ahead and book a 30 minute call with me.</p>
                </div>
                <div style={{width : '40px'}}>

                </div>
                <div className='section20-big-package'>
                    <div>
                        <div style={{ width: '30px', backgroundColor: '#ffa600', border: '2px solid white', borderRadius: '50%' }}>

                        </div>
                        <h4>1 Hour Meeting - €295</h4>
                        <div>
                            <FaArrowRight />
                        </div>
                    </div>
                    <p>If you have some bigger concerns or questions that you believe I can solve or answer fairly quickly, go ahead and book a 1 hour call with me.</p>
                </div>
            </div>
        </div>
    )
}
