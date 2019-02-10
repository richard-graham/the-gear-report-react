import request from 'superagent'

export function getIsland() {
    return request.get('/API/island')
        .then(res => {
            return res.body
        })
        .then((body)=>{
            return body
        })
}