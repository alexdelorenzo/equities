import React from 'react'
import { Row, Col } from 'antd'
import MellioEquitiesLargeLogo from '../assets/images/footer-logo.svg'
import { Link } from 'react-router-dom'

class CallOut extends React.Component {
	render() {
		return (
			<div>
				<br />
				<br />
				<Row>
					<Col
						className="portfolio-block portfolio-text-block portfolio-block-left"
						xs={24}
						md={8}>
						<div className="portfolio-block-outer">
							<div className="footer-left">
								<h5 className="portfolio-callout-small left">INVESTOR</h5>
								<Link to={'/investor-login'}>
									<h3 className="portfolio-callout left">Login</h3>
								</Link>
							</div>
						</div>
					</Col>
					<Col className="portfolio-block portfolio-text-block" xs={24} md={8}>
						<div className="portfolio-block-outer">
							<Link to="/">
								<img
									src={MellioEquitiesLargeLogo}
									className="footer-logo"
									alt="Mellio Equities Footer Logo"
								/>
							</Link>
							<p className="footer-text">
								190 MAIN STREET, STE. 202,<br className="visible-mobile" />{' '}
								GLADSTONE, NJ 07934<br className="visible-mobile" />
								1+9082349561
							</p>
						</div>
					</Col>
					<Col className="portfolio-block portfolio-text-block" xs={24} md={8}>
						<div className="portfolio-block-outer">
							<div className="footer-right">
								<h5 className="portfolio-callout-small right">SAY HI</h5>
								<Link to={'/contact'}>
									<h3 className="portfolio-callout right">Contact</h3>
								</Link>
							</div>
						</div>
					</Col>
				</Row>
				<br />
			</div>
		)
	}
}

export default CallOut
