const checkExistAccount =(data , store) =>{
    let rs = {
        state: false,
        username:""
    }
    store.forEach( arr => {
        if(arr.email == data.email && arr.password == data.password){
            rs = {
                state: true,
                username: arr.username
            }
        }
    })
    return rs
}
export default checkExistAccount;