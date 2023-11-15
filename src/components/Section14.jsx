import React from 'react'
import '../index.css'
import { FaInbox, FaLocationArrow, FaBuilding } from 'react-icons/fa'

export default function Section14() {
    return (
        <div className='section14-parent'>
            <div className='section14-info'>
                <h2>Let's get in touch</h2><br />
                <h1>Let's talk about you & your challenges.</h1><br /><br /><b></b>

                <h3>Contact information</h3><br /><br />
                <p><FaInbox /> info@bobmeijer.nl</p><br />
                <p><FaLocationArrow /> Nijstadstraat 2, 7478 DJ <br /> Diepenheim, Nederland</p><br />
                <p><FaBuilding /> COC: 78449227 <br /> BTW:NL861402728B01</p><br />
            </div>
            <div className='section14-form'>
                <div className='section14-form-div'>
                    <h1>Send me a message</h1><br /><br />
                    <form>
                        <label htmlFor="name">Your name</label><br /><br />
                        <input type="text" placeholder='Enter your full name here'/><br /><br /><br />

                        <label htmlFor="email">Your e-mail address</label><br /><br />
                        <input type="email" placeholder='Enter your e-mail address here' /><br /><br /><br />

                        <label htmlFor="phone">Your phone number</label><br /><br />
                        <input type="number" placeholder='Please fill your phone number here'/><br /><br /><br />

                        <label htmlFor="comment">Comments</label><br /><br />
                        <textarea style={{width : '100%'}} rows={7} placeholder="What do you need help with? What are your buggest challenges? What you've done in the past? What is the available google Ads monthly budget if relavent?"/> <br /><br />

                        <button>Send my contact request</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
