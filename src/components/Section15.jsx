import React from 'react'
import '../index.css'

export default function Section15() {
    return (
        <div className='section15-parent'>
            <div>
                <div>
                    <p>Bob convinced WeightWatchers of his knowledge and expertise from the 1st moment of contact. The results exceeded expectations!</p>
                </div>
                <div>
                    <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Quote_Bob-Meijer_RGB.png" alt="icon" className='section15-icon' />
                </div>
            </div>
            <div style={{marginTop : '20px'}}>
                <div>
                    <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/jens-riga-1.png" alt="reviewer" className='section15-image' />
                </div>
                <div>
                    <div>
                        <div style={{width : '30px'}}></div>
                        <h4>Jens Riga</h4><div style={{width : '20px'}}></div>
                        <p>Head of Digital @ WeightWatchers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
