import React from 'react'
import "./styles/Badge.css"

class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header"></div>

            <div className="Badge__section-name">
            <img className="Badge__avatar" src="https://gravatar.com/avatar/3a9a883e65e6038462224f04b4714a88?d=identicon" alt="Avatar"/>
            <h1>{this.props.name}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.job}</h3>
                <span>{this.props.twitter}</span>
            </div>

            <div className="Badge__footer">{this.props.conference}</div>
        </div>
    }
}

export default Badge

