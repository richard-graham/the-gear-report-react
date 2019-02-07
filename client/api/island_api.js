import request from 'superagent'

export function getIsland() {
    return request.get('/API/island')
        .then(res => {
            console.log(res)
            return res.body
        })
        .then((body)=>{
            console.log('body', body)
            return body
        })
}