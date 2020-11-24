import { ADD_SHOW, ADD_SHOWS_FROM_FETCH, ADD_COMICS_FROM_FETCH} from "./actionTypes";

export const addShow = showObj => {
    console.log("submitted show:", showObj)
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
            .then(data => dispatch({ type: ADD_SHOW, payload: data }))
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



// dispatch({ type: GET_SHOWS, payload: data })