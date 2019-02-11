import React from 'react'
import {getTicket} from '../../api/ticket_api'

class DisplayTicket extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            ticketId: this.props.match.params.id,
            ticketData: []
        }
    }

    componentDidMount(){
        getTicket()
        .then((res)=>{
            this.setState({
                ticketData: res
            })
        })
    }

    render() {
        // this.state.ticketId = this.props.match.params.id
        let ticket = this.state.ticketData.find(item => item.id == this.state.ticketId)
        return (
            <div>
                {ticket && 
                <div>
                    <h1>{ticket.title}</h1>
                    <br/>
                    {ticket.region_name && <p>Region: {ticket.region_name}</p>}
                    {ticket.area_name && <p>Area: {ticket.area_name}</p>}
                    {ticket.crag_name && <p>Crag: {ticket.crag_name}</p>}
                    {ticket.wall_name && <p>Wall: {ticket.wall_name}</p>}
                    {ticket.route_name && <p>Route: {ticket.route_name}</p>}
                    <br/>
                    <p>Description: {ticket.description}</p>
                    <p>Severity: {ticket.severity}</p>
                    <p>Date Created: {ticket.created_at}</p>
                </div>
                }
            </div>
        )
    }
}

export default DisplayTicket