import React from 'react'
import {getTicket} from '../../api/addTicket_api'
import request from 'superagent'

class AddTicket extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          email: '',
          birthdate: ''
      }
      this.handleChange = this.handleSubmit.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        const {ticket} = this.props
        if (ticket) {
            this.setState(ticket)
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        getTicket(this.state)
            .then(newTicket => {
                fetchTickets()
                .then(() => )
            })
    } 

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Enter username</label>
            <input id="username" name="username" type="text" /><br/>

            <label htmlFor="email">Enter your email</label>
            <input id="email" name="email" type="email" /><br/>

            <label htmlFor="birthdate">Enter your birth date</label>
            <input id="birthdate" name="birthdate" type="text" /><br/>

            <button>Send data!</button>
      </form>
        )
    }
}

export default AddTicket