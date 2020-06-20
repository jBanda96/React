import React from 'react'

class Form extends React.Component {
    state = {}

    handleClick = event => {
        event.preventDefault()
    }

    render(){
        return (
            <div>
                <h1>New attendant</h1>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="name"
                            value={this.props.values.name}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.values.email}/>
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="job"
                            value={this.props.values.job}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.values.twitter}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default Form