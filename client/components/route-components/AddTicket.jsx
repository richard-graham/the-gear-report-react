import React from 'react'
import {getTicket} from '../../api/addTicket_api'
import request from 'superagent'

class AddTicket extends React.Component {
   
    //   this.handleChange = this.handleSubmit.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // componentDidMount () {
    //     const {ticket} = this.props
    //     if (ticket) {
    //         this.setState(ticket)
    //     }
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     getTicket(this.state)
    //         .then(newTicket => {
    //             fetchTickets()
    //             .then(() => )
    //         })
    // } 

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            severity: '',
            island_name: '',
            region_name: '',
            area_name: '',
            crag_name: '',
            wall_name: '',
            route_name: '' 
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let newState = {}
        newState[e.target.name] = e.target.value
        this.setState(newState)
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch('/API/ticket/add', {
            method: 'POST',
            body: this.state
          });
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" onChange={this.handleChange}/><br/>

            <label htmlFor="description">Description</label>
            <input id="description" name="description" type="text" onChange={this.handleChange}/><br/>

            <label htmlFor="severity">Severity</label>
            <input id="severity" name="severity" type="text" onChange={this.handleChange}/><br/>

            <label htmlFor="island_name">Island Name</label>
            <input id="island_name" name="island_name" type="text" onChange={this.handleChange}/><br/>

            <label htmlFor="region_name">Region Name</label>
            <input id="region_name" name="region_name" type="text" onChange={this.handleChange}/><br/>

            <label htmlFor="area_name">Area Name</label>
            <input id="area_name" name="area_name" type="text" onChange={this.handleChange}/><br/>

            <label htmlFor="crag_name">Crag Name</label>
            <input id="crag_name" name="crag_name" type="text" onChange={this.handleChange}/><br/>

            <label htmlFor="wall_name">Wall Name</label>
            <input id="wall_name" name="wall_name" type="text" onChange={this.handleChange}/><br/>

            <label htmlFor="route_name">Route Name</label>
            <input id="route_name" name="route_name" type="text" onChange={this.handleChange}/><br/>

            <button>Send data!</button>
      </form>
        )
    }
}

export default AddTicket