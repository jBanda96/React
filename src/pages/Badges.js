import React from 'react'
import BadgeList from '../components/BadgeList'

import logo from '../images/logo.png'

import './styles/Badges.css'
import { Link } from 'react-router-dom'

class Badges extends React.Component {

    state = {
        data: [
            {
                id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                name: 'Julio Banda',
                email: 'julitop_55@hotmail.com',
                job: 'FullStack Developer',
                twitter: 'jBanda_',
                avatarUrl:
                    'https://www.gravatar.com/avatar/42ac716e08f4d37e2e37d3f7a72c2a39?d=identicon',
            },
            {
                id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                name: 'Krystell Velazquez',
                email: 'estrella_irais@hotmail.com',
                job: 'Hospitallity',
                twitter: 'lletsyrk',
                avatarUrl:
                    'https://www.gravatar.com/avatar/85f08c8590a371e37261ae41e382c71b?d=identicon',
            },
            {
                id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                name: 'Luis Vanegas',
                email: 'luisito@hotmail.com',
                job: 'Communications Engineer',
                twitter: 'luisillo',
                avatarUrl:
                    'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
            }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={logo} alt="Logo" width="100%" height="250px" />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgeList badges={this.state.data} />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Badges