import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }


    handleSubmit = () => {
        this.props.getWeather(this.state.city);
    }

    handleChange = e => {
        this.setState({ city: e.target.value });
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type='text' placeholder='City' />
                <button onClick={this.handleSubmit}>Get weather</button>
            </div>
        )
    }

}

export default Form