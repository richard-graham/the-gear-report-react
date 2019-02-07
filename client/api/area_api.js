import request from 'superagent'

export function getArea() {
    return request.get('/API/area')
        .then(res => {
            console.log(res)
            return res.body
        })
        .then((body)=>{
            console.log('body', body)
            return body
        })
}
