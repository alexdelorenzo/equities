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
  const width = ` ${props.width}`;
  return (
    <Layout
      className={props.fadeOnScroll ? "hero-background" : "barn-background" }
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
                <span className={`arrow ${width}`}>
                  <span className="arrow-before" style={{ backgroundColor: 'white'}}>
                  </span>
                  <span className="arrow-after" style={{ borderColor: 'white'}}>
                  </span>
                </span>
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
