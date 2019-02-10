import request from 'superagent'

export function getArea() {
    return request.get('/API/area')
        .then(res => {
            return res.body
        })
        .then((body)=>{
            return body
        })
}
