import React from 'react'

import {getTicket} from '../../api/ticket_api'
import {Link} from 'react-router-dom'

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
        let display = null;
        if (!this.state.locationData.island) {
            display = 
            <div>
                <h4 className='tableHeader'>Recent Tickets</h4>
                <table className='table'>
                    <tbody className='tbody'>
                    <tr>
                        <th>Title</th>
                        <th>Crag</th>
                        <th>Date Added</th>
                    </tr>
                    {this.state.ticketData.map((ticket, i) => i < 5 ? 
                    <tr key={i}> 
                        <td><Link to={`/tickets/${ticket.id}`}>{ticket.title}</Link></td> 
                        <td>{ticket.crag_name}</td> 
                        <td>{ticket.created_at}</td>
                    </tr> : '')}
                    </tbody>
                </table>
                <div className="addTicket">
                    <p><Link to={`/tickets/add/ticket`}>Add a ticket</Link></p>
                </div>
            </div>
        } else if (this.state.locationData.crag && !this.state.locationData.wall) {
            display = 
            <div>
                <h4>Tickets at this Crag</h4>
                <ul>
                    {this.state.ticketData.map((ticket, i) => 
                        ticket.crag_name === this.state.locationData.crag ? <Link to={`/tickets/${ticket.id}`} key={i}><li>{ticket.title}</li></Link> : '')}
                </ul>
                <div className="addTicket">
                    <p><Link to={`/tickets/add/ticket`}>Add a ticket</Link></p>
                </div>
            </div>
        } else if (this.state.locationData.wall && !this.state.locationData.climb) {
            display = 
            <div>
                <h4>Tickets at this Wall</h4>
                <ul>
                    {this.state.ticketData.map((ticket, i) => 
                        ticket.wall_name === this.state.locationData.wall ? <Link to={`/tickets/${ticket.id}`} key={i}><li>{ticket.title}</li></Link> : '')}
                </ul>
                <div className="addTicket">
                    <p><Link to={`/tickets/add/ticket`}>Add a ticket</Link></p>
                </div>
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
                            ticket.route_name === this.state.locationData.climb ? <Link to={`/tickets/${ticket.id}`} key={i}><li>{ticket.title}</li></Link> : '')}
                    </ul>
                    <div className="addTicket">
                        <p><Link to={`/tickets/add/ticket`}>Add a ticket</Link></p>
                    </div>
                </div>
                : ''}
        
            </div>
        }
        return (
            <div className='homeTicket'>
                {display}
            </div>
        )
    }
}

export default Ticket

