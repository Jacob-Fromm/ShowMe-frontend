import {combineReducers} from "redux"
import { ADD_COMICS_FROM_FETCH, ADD_SHOWS_FROM_FETCH, ADD_SHOW, EDIT_SHOW, DELETE_SHOW } from "./actionTypes";

// const rootReducer = (state = {
//     comedians: [],
//     shows: []
// }, action) => {
//     console.log("reducer action:", action)
//     switch (action.type) {
//         case "ADD_SHOW":
//             return { ...state, shows: [...state.shows, action.payload] }
//         case "ADD_SHOWS_FROM_FETCH":
//             return {...state, shows: action.payload }
//         case "ADD_COMICS_FROM_FETCH":
//             return { ...state, comedians: action.payload }
//         default:
//             return state
//     }

// }

const defaultState = {
    comedians: [],
    shows: []
}

function comediansReducer(state = defaultState.comedians, action){
    switch (action.type) {
        case ADD_COMICS_FROM_FETCH:
            return action.payload
        default:
            return state
          
    }
    
}
function showsReducer(state = defaultState.shows, action){
   switch (action.type) {
       case ADD_SHOWS_FROM_FETCH:
           return action.payload
        case ADD_SHOW:
            return  [...state, action.payload]
        case EDIT_SHOW:
            break;
        case DELETE_SHOW:
            break;
       default:
           return state
   }
}

const rootReducer = combineReducers({
    comedians: comediansReducer,
    shows: showsReducer
})

export default rootReducer