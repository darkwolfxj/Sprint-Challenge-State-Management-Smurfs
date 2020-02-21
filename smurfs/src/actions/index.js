import axios from "axios"

export const ADD_SMURF = "ADD_SMURF"
export const DELETE_SMURF = "DELETE_SMURF"
export const EDIT_SMURF = "EDIT_SMURF"
export const FETCH_DATA = "FETCH_DATA"
export const UPDATE_DATA = "UPDATE_DATA"
export const UPDATE_SMURFS = "UPDATE_SMURFS"
export const EDITING_STATE = "EDITING_STATE"

export const getData = () => dispatch => { 
    dispatch({ type: FETCH_DATA })
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: UPDATE_DATA, res })
        })
        .catch(err => {
            alert("Smurfing error")
            console.log("error fetching:", err)
        })
}

export const addSmurf = (smurf) => dispatch => {
    axios   
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF, smurf })
        })
        .catch(err => {
            alert("Smurfing error")
            console.log("error adding:", err)
        })
}

export const edit = () => dispatch => {
    dispatch({ type: EDITING_STATE })
}

export const editSmurf = (id, smurf) => dispatch => {
    dispatch({ type: EDITING_STATE })
    console.log("this is smurf in actions", smurf   )
    axios 
        .put(`http://localhost:3333/smurfs/${ id }`, { name: smurf.name, age: smurf.age, height: smurf.height })
        .then(res => {
            console.log(res.data)
            update(res.data)
        })
        .catch(err => {
            alert("Smurfing error")
            console.log("error editing:", err)
        })
    
}
export const update = (smurfs) => dispatch => {
    dispatch({ type: UPDATE_SMURFS, smurfs })
}

export const Delete = (id) => dispatch => {
    dispatch({ type: FETCH_DATA })
    console.log("this is id in actions", id)
    axios
        .delete(`http://localhost:3333/smurfs/${ id }`)
        .then(res => {
            console.log("response from deleting", res)
            dispatch({ type: UPDATE_DATA, smurfs: (res == undefined) ? ([{ name: "No", age: "smurfs", height: "here" }]) : res.data })
        })
        .catch(err => {
            alert("Smurfing error")
            console.log("error deleting:", err)
        })
}