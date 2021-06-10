import React from 'react'
import styled from 'styled-components'

function ImageSection() {
  return (
    <ImageSetcionStyled>
      <div className="left-content">
        <img src="" alt="resume" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>I am <span>Lorem Ipsum</span></h4>
        </div>
        <p className="paragraphy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure consectetur,
          quidem debitis accusantium impedit distinctio qui corrupti odio sint nemo perspiciatis!
          Quidem necessitatibus eveniet tenetur consectetur tempora mollitia a odio neque quis.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: Bea Kelemen</p>
            <p>: 27</p>
            <p>: Hungarian</p>
            <p>: Hungarian, Romanian, English</p>
            <p>: Baraolt, Romania</p>
          </div>
        </div>
      </div>
    </ImageSetcionStyled>
  )
}

const ImageSetcionStyled = styled.div``
export default ImageSection
