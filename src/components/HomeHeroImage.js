import React from 'react'
 
import Background from '../assets/images/barn_background.jpg'
import {Layout, Icon} from 'antd';
import { Parallax } from 'react-parallax';

const {Content} = Layout;

export const HeroImage = (props) => {
  return (
  
    <Layout
      className="barn-background"
      style={{
      minHeight: '100vh',
      backgroundColor: '#1d4a63',

    }}>
    <Parallax bgImage={Background} strength={400}>
      <Content style={{
        margin: '0 0px',
        height: 95 + 'vh'
      }}>
        <div className="hero-block">
          <h3 className="hero-intro">MELILLO EQUITIES IS A</h3>
          <h1 className="hero-title">real estate private equity with<br/>
            geographical concentration</h1>
        </div>
        <div className="hero-line">
          <h4 className="hero-learn">
            <a style={{
              color: 'white'
            }}>LEARN ABOUT MELILLO EQUITIES
              <Icon type="arrow-right"/></a>
          </h4>
        </div>
        <div className="hero-footer">
          THE COTTAGES AT VERNON MANOR
          <br/>
          <span className="title-name">The Vernon Manor Barn</span>
          <br/>
          <span style={{
            letterSpacing: .5 + 'px'
          }}>BOROUGH OF PEAPACK-GLADSTONE, NEW JERSEY</span>
        </div>
      </Content>
      </Parallax>
    </Layout>
   
  )
}

export default HeroImage