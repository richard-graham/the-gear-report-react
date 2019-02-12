import request from 'superagent'

export function addTicket(ticket) {
    return request.post('/API/ticket/add')
        .send(ticket)
        .then(res => {
            return res.body
        })
        .then((body)=>{
            return body
        })
}
