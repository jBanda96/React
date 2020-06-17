import React from 'react'
import "./styles/Badge.css"

class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header"> <img src="https://pbs.twimg.com/profile_banners/380749300/1592240464/1500x500" alt="Conference Logo"/> </div>

            <div className="Badge__section-name">
            <img className="Badge__avatar" src="https://gravatar.com/avatar/3a9a883e65e6038462224f04b4714a88?d=identicon" alt="Avatar"/>
            <h1>Julio Banda</h1>
            </div>

            <div className="Badge__section-info">
                <h3>Desarrollador iOS</h3>
                <span>@jBanda_</span>
            </div>

            <div className="Badge__footer">#WWDC20</div>
        </div>
    }
}

export default Badge

