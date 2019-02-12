import request from 'superagent'

export function getWall() {
    return request.get('/API/wall')
        .then(res => {
            console.log('here', res)
            return res.body
        })
}
