const axios = require("axios");

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'content-type': 'application/json'}
})

const getUsers = () => {
    return instance.get("/users")
}

module.exports = {getUsers};