import React from 'react'
import Badge from './Badge'

class BadgeList extends React.Component {
    render(){
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return (
                    <li key={badge.id} className="Badge__item">
                        <div>
                            <img src={badge.avatarUrl} alt={badge.avatarUrl}/>
                        </div>
                        <div>
                            <p className="title" >{badge.name}</p>
                            <p className="twitter">@{badge.twitter}</p>
                            <p className="job">{badge.job}</p>
                        </div>
                    </li>
                    )
                })}                
            </ul> 
        )
    }
}

export default BadgeList