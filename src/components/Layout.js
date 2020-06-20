import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
    return (
        <React.Fragment>
            <Navbar/>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout