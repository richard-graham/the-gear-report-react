import request from 'superagent'

export function addTicket(ticket) {
    return request.post('/API/add/ticket')
        .send(ticket)
        .then(res => {
            return res.body
        })
        .then((body)=>{
            return body
        })
}
