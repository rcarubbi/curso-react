import React, { Component } from 'react';
import Axios from '../node_modules/axios';


class Form extends Component {
    state = {
        username: ''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(`teste: ${this.userNameInput.value}`);
        Axios.get(`https://api.github.com/users/${this.state.username}`)
             .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({username: ''});
             });
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    //ref={(input) => this.userNameInput = input}
                    value={this.state.username}
                    onChange={(event) => this.setState({username: event.target.value})}
                    type="text" placeholder="Github username" required />
                <button type="submit">Add Card</button>
            </form>
        )
    }
}

export default Form;