import { ADD_SHOW, ADD_SHOWS_FROM_FETCH, ADD_COMICS_FROM_FETCH, EDIT_SHOW, ADD_COMEDIAN, SET_FAN, ADD_FANS_FROM_FETCH, SET_USER, ADD_FOLLOWED_COMICS_FROM_FETCH, FOLLOW_COMIC} from "./actionTypes";

export const addShow = showObj => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/events", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(showObj)
        })
            .then(resp => resp.json())
            // .then(data => console.log(data))
            .then(data => dispatch({ type: ADD_SHOW, payload: data }))
    }
}

export const addComic = comedianObj => {
    console.log("submitted comedian:", comedianObj)
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/comedians", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(comedianObj)
        })
            .then(resp => resp.json())
            .then(console.log)
            // .then(data => dispatch({ type: ADD_COMEDIAN, payload: data }))
    }
}

export const editShow = showObj => {
    console.log("show to edit", showObj)
    return function (dispatch) {
        fetch(`http://localhost:3000/api/v1/events/${showObj.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(showObj)
        })
            .then(resp=>resp.json())
            .then(data => dispatch(getShows()))
            
    }
}
export const deleteShow = showObj => {
    console.log("show to delete", showObj)
    return function (dispatch) {
        fetch(`http://localhost:3000/api/v1/events/${showObj.id}`, {
            method: "DELETE"
        })
            .then(resp=>resp.json())
            .then(data => dispatch(getShows()))
            
    }
}

export const getFollowedComics = followObj => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/comedian_fans")
            .then(resp=>resp.json())
            .then(data => dispatch({type: ADD_FOLLOWED_COMICS_FROM_FETCH, payload: data}))
    }
}

export const followComic = (followObj, currentUser) => {
    return function (dispatch) {
        // console.log(currentUser)
        fetch("http://localhost:3000/api/v1/comedian_fans", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                    comedian_id: followObj.id,
                    fan_id: currentUser.id
            })
        })
            .then(resp=>resp.json())
            .then(data => dispatch({type: FOLLOW_COMIC, payload: followObj}))
    }
}

export const getShows = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/events")
            .then(resp=>resp.json())
            .then(data => dispatch({type: ADD_SHOWS_FROM_FETCH, payload: data}))
    }
}
export const getComics = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/comedians")
            .then(resp=>resp.json())
            .then(data => dispatch({type: ADD_COMICS_FROM_FETCH, payload: data}))
    }
}

export const getFans = () => {
    return function (dispatch){
        fetch("http://localhost:3000/api/v1/fans")
            .then(resp=>resp.json())
            .then(data => dispatch({type: ADD_FANS_FROM_FETCH, payload: data}))
    }
}

export const setFan = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/fans/3")
            .then(resp=>resp.json())
            .then(data => dispatch({type: SET_FAN, payload: data}))
    }
}

export const setUser = userObj => {
    return {
        type: SET_USER,
        payload: userObj
    }
}



// dispatch({ type: GET_SHOWS, payload: data })