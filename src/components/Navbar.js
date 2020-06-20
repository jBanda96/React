import React from 'react'
import logo from '../images/logo.png'

import { Link } from 'react-router-dom'

import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt=" WWDC20" width="2%"/>
                        <span className="font-weight-light">WWDC</span><span className="font-weight-bold">20</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar