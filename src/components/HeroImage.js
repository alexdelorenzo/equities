import React from 'react'

import {Layout, Icon} from 'antd';

export const HeroImage = (props) => {
  if (props.textPosition == 'center') {
    var textPosition = 'home-hero-arrow-center';
  }
  else if (props.textPosition == 'right') {
    var textPosition = 'home-hero-arrow-right';
  }
  const arrow = `arrow-${props.arrowDirection}`;
  return (
    <Layout
      className="barn-background "
      style={{
      minHeight: props.height + 'vh',
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundImage: `url(${props.background})`
    }}>
      {props.largeCall && <div className="hero-callout-block-outer">
        <div className="hero-block ">
          <h3
            className="hero-intro"
            style={{
            letterSpacing: 4 + 'px'
          }}>
            {props.smallCall}
          </h3>
          <h1 className="hero-title">{props.largeCall}</h1>
          <h4 className="hero-learn">
            <a style={{
              color: 'white'
            }}>{props.linkText}
              <div className={`home-hero-arrow ${textPosition} ${arrow}`}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   viewBox="0 0 36 18" style={{ enableBackground:'new 0 0 36 18' }} >
                   <path d="M27.1,0.1c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l7.8,7.7H0.5C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.5,0.5h33.6
                  l-7.8,7.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.3,0,0.3-0.1L36,9L27.1,0.1z"/>
                </svg>
              </div>
            </a>
          </h4>
        </div>
      </div>
}

    </Layout>
  )
}

export default HeroImage
