import React from "react"
import { connect } from "react-redux"

import "./App.css"
import { getData, edit, Delete } from "../actions"
import Form from "./Form"
import EditingSmurfForm from './EditingSmurfForm';


const App = ({ state, getData, edit, Delete}) => {

    return (
        <div className="App">
            {(state.isLoading === true) ? 
            (<span><img src="https://i.imgur.com/MafzfZP.gif"></img></span>) : 
            <>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
            { state.smurfs.map(smurf => (
                <div key = { smurf.id }>
                    <div>
                        <span>
                            <span>Name: { smurf.name }</span> 
                            <span>Age: { smurf.age }</span> 
                            <span>Height: { smurf.height }</span>
                            <span><button onClick={ () => Delete(smurf.id) }>Delete</button></span>
                        </span>
                        <span>{ ( state.isEditing===true ) ? (<EditingSmurfForm smurf={ smurf } />) : <></> }</span>
                    </div>
                </div>
            )) }
            <span><button onClick={ () => edit() }>Edit</button></span><br />
            <Form />
            <button onClick={ () => getData() }>Get Smurfs</button>
            </>
            }
    </div>
    )
  }
const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, { getData, edit, Delete })(App)
