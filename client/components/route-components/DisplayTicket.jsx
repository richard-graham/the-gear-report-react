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
                    <p>-{ticket.region_name}</p>
                    <p>-{ticket.area_name}</p>
                    <p>-{ticket.crag_name}</p>
                    <p>-{ticket.wall_name}</p>
                    <p>-{ticket.route_name}</p>
                </div>
                }
            </div>
        )
    }
}

export default DisplayTicket