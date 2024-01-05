import React from 'react'
import './UnderContruction.css'

function UnderContruction() {
  return (
    <div className="under-construction-container">
        <img
            src="https://illustrations.popsy.co/fuchsia/idea-launch.svg"
            alt="Under Construction"
            className="img-fluid smaller-illustration"
        />
        <h2 className="subtitle">Oops! This page is under construction</h2>
        <p className="witty-text">
            We're working hard to bring you something awesome. Please check back
            soon!
        </p>
    </div>
  )
}

export default UnderContruction
