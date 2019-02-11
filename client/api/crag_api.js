import request from 'superagent'

export function getCrag() {
    return request.get('/API/crag')
        .then(res => {
            return res.body
        })
        .then((body)=>{
            return body
        })
}
