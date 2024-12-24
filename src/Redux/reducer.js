import {GET_TASK , ADD_TASK } from "./actionTypes";


const initialState={
    tasks:null
}

const reducer =(state= initialState , action) => {
    switch(action.type){
        case GET_TASK:
            return{ ...state, tasks:action.payload}
            case ADD_TASK:
                return{...state , tasks:[...state.tasks, action.payload]}
                default:
                    return state

    }

}




export default reducer;