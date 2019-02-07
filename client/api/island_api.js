import request from 'superagent'

export function getIsland() {
    return request.get('/API/island')
        .then(res => {
            // console.log(res)
            console.log('res', res)
            return res.body
        })
        .then((body)=>{
            console.log('island_api')
            console.log('body', body )
            return body
        })
}