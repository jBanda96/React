import React from 'react'

import Badge from '../components/Badge'
import Form from '../components/Form'

import hero from '../images/hero.png'

import './styles/NewBadge.css'

class NewBadge extends React.Component {
    state = { form: {name: '', job: '', twitter: '', email: ''} } 
    
    onChange = event => {
        this.setState({ form: { ...this.state.form, [event.target.name]: event.target.value} })
    }

    render() {
        return (
            <React.Fragment>
                <div className="NewBadge__hero">
                    <img className="img-fluid" src={hero} alt="Logo" width="20%"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge name={this.state.form.name} 
                                job={this.state.form.job} 
                                twitter={this.state.form.twitter} 
                                conference="WWDC20" 
                                email={this.state.form.email}/>
                        </div>
                        <div className="col-6">
                            <Form onChange={this.onChange} values={this.state.form}/>
                        </div>
                    </div>
                    
                </div>

            </React.Fragment>
        )
    }
}

export default NewBadge