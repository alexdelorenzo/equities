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
        height: 70 + 'vh'
      }}>
        <div className="home-hero-block" >
          <div className="shadow-box">
            <h3 className="home-hero-intro">COMMUNITIES</h3>
            <h1 className="home-hero-title">Redefined</h1>
            <div className="home-hero-arrow home-hero-arrow-center">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                	 viewBox="0 0 36 18" style={{ enableBackground:'new 0 0 36 18', color: 'white' }} >
                   <path d="M27.1,0.1c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l7.8,7.7H0.5C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.5,0.5h33.6
                	l-7.8,7.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.3,0,0.3-0.1L36,9L27.1,0.1z"/>
                </svg>

            </div>

          </div>
        </div>
      </Content>
      </Parallax>
    </Layout>

  )
}

export default HeroImage
