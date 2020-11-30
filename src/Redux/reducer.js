import {combineReducers} from "redux"
import { ADD_COMICS_FROM_FETCH, ADD_SHOWS_FROM_FETCH, ADD_SHOW, EDIT_SHOW, DELETE_SHOW, ADD_COMEDIAN, SET_FAN } from "./actionTypes";

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
    shows: [],
    currentUser: {},
    isLoggedIn: false
}

function usersReduer(state = defaultState.currentUser, action){
    switch (action.type) {
        case SET_FAN:
            return action.payload
        default:
            return state
    }
}

function loginReducer(state=defaultState.isLoggedIn, action){
    switch (action.type) {
        case SET_FAN:
            return true
        default: 
            return state
    }
}

function comediansReducer(state = defaultState.comedians, action){
    switch (action.type) {
        case ADD_COMICS_FROM_FETCH:
            return action.payload
        case ADD_COMEDIAN:
            return [...state, action.payload]
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
    shows: showsReducer,
    currentUser: usersReduer,
    isLoggedIn: loginReducer
})

export default rootReducer