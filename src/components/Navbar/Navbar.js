import React from 'react'	
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Logo from '../../assets/images/logo_letter.png'

class Navbar extends React.Component {	
	state = {
		navbarIsTop: true,
		menuIsOpen: false
	}

	static propTypes = {
		activePage: PropTypes.string,
	}

	static defaultProps = {
		activePage: '',
		navbarIsTop: true,
		menuIsOpen: false		
	}

	componentDidMount() {
		let scrollPosition = document.documentElement.scrollTop
		const scrollListener = () => {
			this.setState({ 
				navbarIsTop: scrollPosition <= 5 
			})	
		}
		window.addEventListener('scroll', scrollListener)
	}

	handleToggle = event => {			
		this.setState((prevState, props) => {
			return {
				menuIsOpen: !prevState.menuIsOpen,
			}
		})
	}

	render() {	
		const { menuIsOpen }	 = this.state
		return (	
			<nav className={
				"Navbar " + 
				(this.props.activePage == "" ? "inicio " : "") + 
				(this.state.navbarIsTop ? '' : 'noTop') }>		
				<div
					onClick={ (e) => { this.setState({ menuIsOpen: false }) }} 
					className={`Navbar__shadow ${menuIsOpen ? 'open' : ''}`}>
				</div>		
				<div className="container">
					<Link className="Navbar__titlewrap" 
						onClick={ (e) => { this.setState({menuIsOpen: false}) } }  
						to="/">				
						<img className="Navbar__logo" src={Logo} />
						<p className="Navbar__title">Dante Calderón</p>
					</Link>										
					<div className="Navbar__navwrap">
						<button onClick={ this.handleToggle } 
							id="navbarToggler" 
							className={`Navbar__toggler ${menuIsOpen ? 'open' : ''}`}>
							<span className="Navbar__toggler__burger-menu"></span>
						</button>
						<ul className={ `Navbar__nav ${ menuIsOpen ? 'open' : '' }` }>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) } } 
									className={`Navbar__link ${ this.props.activePage === '' ? 'active' : ''}`} 
									to="/">		
									<clr-icon shape="home" class="icon-item" size="21"/>
									Inicio
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} 
									className={`Navbar__link ${ this.props.activePage === 'Blog' ? 'active' : ''}`} to="/blog">
									<clr-icon shape="computer" class="icon-item" size="21"/>
									Blog
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} 
									className={`Navbar__link ${ this.props.activePage === 'Contact' ? 'active' : ''}`} to="/contact">									
									<clr-icon shape="user" class="icon-item" size="21"/>
									Contacto
								</Link>
							</li>						
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }} 
									className={`Navbar__link ${ this.props.activePage === 'Portfolio' ? 'active' : ''}`}to="/portfolio">
									<clr-icon shape="view-cards" class="icon-item" size="21"/>		
									Portafolio
								</Link>
							</li>						
						</ul>					
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar