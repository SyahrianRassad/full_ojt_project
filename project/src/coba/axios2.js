const axios = require('axios')
const istance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer kjagxxxxx'}
})

const getTodoList = () => {
    return istance.get('/posts');
}

const examplePostRequest = () => {
    return istance.post('/posts',{
        method: 'POST',
        headers: {'content-type': 'application/json'}
    })
}

module.exports = {
    getTodoList,
    examplePostRequest
}