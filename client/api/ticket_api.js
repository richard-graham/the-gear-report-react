import request from 'superagent'

// export function getTicket(userId) {
    export function getTicket() {
    // return request.get(`/API/${userId}/climb/`)
    return request.get(`/API/ticket/`)
        .then(res => {
            return res.body
        })
        .then((body)=>{
            return body
        })
}
