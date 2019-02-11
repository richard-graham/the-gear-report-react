import request from 'superagent'

export function getClimb(userId) {
    return request.get(`/API/${userId}/climb/`)
        .then(res => {
            return res.body
        })
        .then((body)=>{
            return body
        })
}
