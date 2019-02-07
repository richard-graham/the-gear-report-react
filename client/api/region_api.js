import request from 'superagent'

export function getRegion() {
    return request.get('/API/region')
        .then(res => {
            console.log(res)
            return res.body
        })
        .then((body)=>{
            console.log('body', body)
            return body
        })
}
