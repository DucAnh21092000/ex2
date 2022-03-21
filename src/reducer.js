import {GET_USERS_SUCCESS, SAY_HELLO} from "./actions";

const myFirstReducer = (state ={users:[{
    }]},action) => {
  switch (action.type) {
      case GET_USERS_SUCCESS:
          return {
              ...state,
              users : action.users
          }
      case SAY_HELLO:
          console.log("hello")
          return {
              ...state
          }
      default:
          return state
  }
}

export default myFirstReducer;