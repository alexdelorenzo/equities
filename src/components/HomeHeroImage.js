import React from 'react'

import Background from '../assets/images/home-hero-town-color.jpg'
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
        height: 60 + 'vh'
      }}>
        <div className="home-hero-block">
          <div className="shadow-box">
            <h3 className="home-hero-intro">COMMUNITIES</h3>
            <h1 className="home-hero-title">Redefined</h1>
            <p className="home-hero-arrow"><Icon type="arrow-right" /></p>
          </div>
        </div>
      </Content>
      </Parallax>
    </Layout>

  )
}

export default HeroImage
