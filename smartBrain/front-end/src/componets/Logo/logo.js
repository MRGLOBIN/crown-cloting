import React from 'react'
import './logo.css'
import Tilt from 'react-parallax-tilt'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className=" Tilt br2 shadow-2"
        style={{ height: '150px', width: '150px' }}
      >
        <div style={{ height: '300px' }}>👽</div>
      </Tilt>
    </div>
  )
}

export default Logo
