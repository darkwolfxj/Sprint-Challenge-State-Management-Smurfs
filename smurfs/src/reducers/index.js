import { 
    ADD_SMURF, 
    EDIT_SMURF,
    FETCH_DATA,
    UPDATE_DATA,
    UPDATE_SMURFS,
    EDITING_STATE
} from "../actions" ;

export const initState = {
    smurfs: [],
    isLoading: false,
    addedSmurf: {},
    isEditing: false
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            console.log("fetching data")
            return { ...state, isLoading: true }
        case UPDATE_DATA:  
            console.log("this is state after update data",state)
            return { ...state, isLoading: false, smurfs: action.res.data }
        case ADD_SMURF:
            return { ...state, addedSmurf: action.smurf }
        case EDITING_STATE:
            return { ...state, isEditing: !state.isEditing }
        case EDIT_SMURF:
            return { ...state, isLoading: false, smurfs: action.smurfs, isEditing: false }                
        case UPDATE_SMURFS:
            return { ...state, smurfs: action.smurfs }
        default:
            return state
    }
}