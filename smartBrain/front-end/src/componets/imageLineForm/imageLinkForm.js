import React from 'react'
import './imageLinkform.css'

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {'This Magic Brain will detect faces in your picture. Give it a try.'}
      </p>
      {/* center css calss name in app.css */}
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            type="text"
            style={{ border: 'white solid 1px' }}
            className="f4 pa2 w-70 center"
          />
          <button
            style={{ border: '#b9b1b1 1px solid', borderRadius: '3.5px' }}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
