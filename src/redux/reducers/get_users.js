import {CREATE_USER, GET_USER} from "../const";
const initialState ={
    users: [{
        data:[]
    }],
    login:false,
    create:false,
    message:""
}
const getAllUsers = (state = initialState,action)=>{
     switch (action.type){
         case GET_USER:
             return {
                 ...state,
                 users: action.users
             }

         default:
             return state
     }
}

export default getAllUsers