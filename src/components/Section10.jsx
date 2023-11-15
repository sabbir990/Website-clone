import React from 'react'
import '../index.css'
import CardInfos from './cardInformations'
import Cards from './Cards'

export default function Section10() {
    return (
        <div className='section10-parent'>
            <div className='section10-heading-div'>
                <h1>Google Ads Resources</h1>
            </div>
            <div className='section10-information-div'>
                <div>
                    {CardInfos.map((elements) => {
                        return (
                            <div key={elements.id}>
                                <Cards name={elements.name} image={elements.image} link={elements.link} desc={elements.desc} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
