import React from 'react'
import '../index.css'

export default function Cards({ image, name, desc, link }) {
    return (
        <div className='card-parent'>
            <div className='card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='card-informations'>
                <h3>{name}</h3>
                <p>{desc}</p>
                <a>{link}</a>
            </div>
        </div>
    )
}
