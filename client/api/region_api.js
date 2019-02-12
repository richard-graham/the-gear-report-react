import request from 'superagent'

export function getRegion() {
    return request.get('/API/region')
        .then(res => {
            return res.body
        })
        .then((body)=>{
            return body
        })
}
