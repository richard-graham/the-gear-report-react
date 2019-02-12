import request from 'superagent'

export function getWall() {
    return request.get('/API/wall')
        .then(res => {
            return res.body
        })
        
}
