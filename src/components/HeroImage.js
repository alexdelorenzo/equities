import React from 'react'

import {Layout, Icon} from 'antd';

export const HeroImage = (props) => {
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
              <Icon type={arrow}/></a>
          </h4>
        </div>
      </div>
}

    </Layout>
  )
}

export default HeroImage
