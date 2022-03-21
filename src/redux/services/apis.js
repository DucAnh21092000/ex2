const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export const  getUsers = async () =>{
    return  await axios.get('/user')
}

export const createUser = async (data) =>{
    return await axios.post('/user',data)
}
