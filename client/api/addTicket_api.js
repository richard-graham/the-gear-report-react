import request from 'superagent'

export function addTicket(ticket) {
    console.log('lol fuck off', ticket)
    return request.post('/API/ticket/add')
        .send(ticket)
        .then(res => {
           console.log('NO WAY', res) 
         })
}

export function updateTicket(ticket) {
  console.log('update', ticket.id)
    return request.put('/API/ticket/update')
        .send(ticket)
        .then(res => {
           console.log('NO WAY', res) 
         })
}