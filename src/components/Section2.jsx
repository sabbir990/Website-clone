import React from 'react'
import '../index.css'

export default function Section2({header}) {
    return (
        <div className='section2-parent'>
            <h1>{header}</h1>
            <div>
                <img decoding="async" loading="lazy" src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Wave_Bob-Meijer_RGB.png" className="underline-rounded" alt="rounded-unerline" srcSet="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Wave_Bob-Meijer_RGB.png 800w, https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Wave_Bob-Meijer_RGB-300x31.png 300w, https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Wave_Bob-Meijer_RGB-768x80.png 768w" />
            </div>
            <h5>May I add you to the list?</h5>

            <div className='brand-div'>
                <div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-conrad.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-rompslomp.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-ww-2.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-bww.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-jobseeker.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-kpmg.png" alt="brand" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-steigerbuisstunter.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-harley.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-springcast.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-bynco.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-louwman.png" alt="brand" />
                    </div>
                    <div>
                        <img src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-wensink.png" alt="brand" />
                    </div>
                </div>
            </div>
        </div>
    )
}
