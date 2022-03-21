const checkExistEmail =(data , store) =>{
    let rs = false
    store.forEach( arr => {
        if(arr.email == data.email){
            rs = true
        }
    })
    return rs
}
export default checkExistEmail;