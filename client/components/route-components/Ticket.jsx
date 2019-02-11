import React from 'react'

import {getTicket} from '../../api/ticket_api'

class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketData: [],
            locationData: []
        }
    }

    componentDidMount() {
        getTicket() 
        .then((res) => {
            this.setState({
                ticketData: res
            })
        })
    }

    render() {
        this.state.locationData = this.props.propsData.match.params
        console.log('locationData', this.state.locationData)
        console.log('ticketData', this.state.ticketData)
        let display = null;
        if (!this.state.locationData.island) {
            display = 
            <div>
                <h4>Recent Tickets</h4>
                <ul>
                    {this.state.ticketData.map((ticket, i) => i < 5 ? 
                    <li key={i}>{ticket.title} {ticket.crag_name} {ticket.created_at}</li> : '')}
                </ul>
            </div>
        } else if (this.state.locationData.crag && !this.state.locationData.wall) {
            display = 
            <div>
                <h4>Tickets at this Crag</h4>
                <ul>
                    {this.state.ticketData.map((ticket, i) => 
                        ticket.crag_name === this.state.locationData.crag ? <li key={i}>{ticket.title}</li> : '')}
                </ul>
            </div>
        } else if (this.state.locationData.wall && !this.state.locationData.climb) {
            display = 
            <div>
                <h4>Tickets at this Wall</h4>
                <ul>
                    {this.state.ticketData.map((ticket, i) => 
                        ticket.wall_name === this.state.locationData.wall ? <li key={i}>{ticket.title}</li> : '')}
                </ul>
            </div>
        } else if (this.state.locationData.climb) {
            let isTrue = this.state.ticketData.find(ticket => ticket.route_name === this.state.locationData.climb)
            display = 
            <div> 
                {isTrue ? 
                <div>
                <h4>Tickets at this Route</h4>
                <ul>
                    {this.state.ticketData.map((ticket, i) => 
                        ticket.route_name === this.state.locationData.climb ? <li key={i}>{ticket.title}</li> : '')}
                </ul>
                </div>
                : ''}
        
            </div>
        }
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Ticket

