import React from 'react'
import background from '../assets/background.png'
import './ImageSection.css'
const ImageSection = () => {
    return (
        <div>
            <img className='image-section' src={background} alt="" />
        </div>
    )
}

export default ImageSection