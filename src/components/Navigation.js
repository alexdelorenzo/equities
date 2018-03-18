import React from 'react';
import {withRouter} from 'react-router-dom';
import {HamburgerButton} from 'react-hamburger-button';
import {Menu} from 'antd';
import logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
var classNames = require('classnames');
const SubMenu = Menu.SubMenu;

class Navigation extends React.Component {
  state = {
    collapsed: true,
    open: false,
    openKeys: [],

  };
  handleClick() {
    const activeOpenKey = `/${this.props.location.pathname.split('/')[1]}`;
    this.setState({
      open: !this.state.open,
      collapsed: !this.state.collapsed,
      openKeys: [activeOpenKey]
    });
  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

    console.log(this.props.location);
    console.log(openKeys);
    this.setState({
      openKeys: latestOpenKey
        ? [latestOpenKey]
        : []
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({
        open: false,
        collapsed: true,
        openKeys: []
      });
    }
  }

  render() {

    var menuClasses = classNames({'menu': true, 'menu-collapsed': this.state.collapsed});
    return (
      <div className="menu-container">
      <NavLink to="/" >
        <div className='icon-square' style={{
          position: 'fixed'
        }}>
          <img alt="Melillo Equities Logo" src={logo} className="menu-logo"/>
        </div>
        </NavLink>

        <a
          className='hamburger-square'
          style={{
          position: 'fixed',
          fontFamily: 'kepler-std-display'

        }}
          onClick={this
          .handleClick
          .bind(this)}>
          <HamburgerButton
            open={this.state.open}
            onClick={this
            .handleClick
            .bind(this)}
            width={30}
            height={25}
            style={{
            margin: 'auto'
          }}
            strokeWidth={1}
            color='white'
            animationDuration={0.5}/>
        </a>

        <div
          className={menuClasses}
          style={{
          width: 240,
          position: 'fixed',
        }}>
          <Menu
            theme="light"
            openKeys={this.state.openKeys}
            onOpenChange={(this.onOpenChange)}
            selectedKeys={[window.location.pathname]}
            defaultSelectedKeys={[this.state.urlLocation]}
            mode="inline">
            <Menu.Item key="/">
              <NavLink to="/" >
              <span>

                  HOME

              </span>
              </NavLink>
            </Menu.Item>

<Menu.Item key="/firm/firm-overview" >
<NavLink
to="/firm/firm-overview"

><span>

FIRM


</span>

</NavLink>

</Menu.Item>

            <Menu.Item key="/leadership">
              <NavLink to="/leadership">
                <span>LEADERSHIP</span>
              </NavLink>
            </Menu.Item>
            <SubMenu key="sub2" title={"STRATEGY"}>
              <Menu.Item key="/strategy/strategy-overview">
                <NavLink to="/strategy/strategy-overview">
                  Strategy Overview
                </NavLink>
              </Menu.Item>
              <Menu.Item key="8">Investment Structure</Menu.Item>
              <Menu.Item key="81">Vertical Integration</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" title={"PORTFOLIO"}>
              <Menu.Item key="/portfolio/bernardsville">
                <NavLink to="/portfolio/bernardsville">
                  Bernardsville
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/portfolio/peakpack-gladstone">
                <NavLink to="/portfolio/peakpack-gladstone">
                  Peapack-Gladstone
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/portfolio/farhills">
                <NavLink to="/portfolio/farhills">
                  Far Hills
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/portfolio/mendham">
                <NavLink to="/portfolio/mendham">
                  Mendham
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <span>INVESTOR LOGIN</span>
            </Menu.Item>
            <Menu.Item key="/contact" style={{  borderBottom: '1px solid #dddddd'}}>
              <NavLink to="/contact" >
                <span>
                    CONTACT
                </span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>

    );
  }
}

export default withRouter(Navigation);
