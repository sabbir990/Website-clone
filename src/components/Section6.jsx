import React from 'react'
import '../index.css'
import {FaLinkedin} from 'react-icons/fa'

export default function Section6({ name, icon, image, comments, position, link }) {
  return (
    <div className='section6-parent'>
      <img src={icon} alt="quote-icon" className='quote-icon' />
      <p className='comments'>{comments}</p>
      <img src={image} alt={name} className='commenter-image' />
      <p className='commenter-name' href={link}>{name} <FaLinkedin /></p>
      <p className='commenter-position'>{position}</p>
    </div>
  )
}
