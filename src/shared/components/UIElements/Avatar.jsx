import React from 'react'
import './Avatar.css'

const Avatar = ({images}) => {
  return (
    <div className={`avatar ${images.className}`} style={images.style}>
        <img
        src={images.image}
        alt={images.alt}
        style={{width: images.width, height: images.width}}
        />
      
    </div>
  )
}

export default Avatar
