import React from 'react'
import './logo.css'
import brain from './brain.png'
import Tilt from 'react-parallax-tilt'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className=" Tilt br2 shadow-2"
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        style={{ height: '150px', width: '150px' }}
      >
        <div className="pa3">
          <img style={{ paddingTop: '5px' }} src={brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
