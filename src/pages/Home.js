import React from 'react'
import { Link } from 'react-router-dom'

import './styles/home.css'

function Home(props) {
    return (
        <div className="background">
            <Link to="/badges" className="btn btn-primary">
                Add Badges
            </Link>
        </div>
    )
}

export default Home