import React, { useState } from "react"
import { connect } from "react-redux"
import { editSmurf } from "../actions/index";

const EditingSmurfForm = ({ smurf, editSmurf }) => {
    const [ input, setInput ] = useState({ name: "", age: "", height: "" })
    const handleChanges = e => setInput({ ...input, [e.target.id]: e.target.value })
    const handleSubmit = e => { 
        e.preventDefault();
        console.log("this is input",input) 
        editSmurf(smurf.id, {  name: `${ input.name }`, age: input.age, height: `${ input.height }cm` })
        setInput({ name: "", age: "", height: ""})
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="name" onChange={ handleChanges } type="text" placeholder="Input new smurf name" />
                <input id="age" onChange={ handleChanges } type="number" placeholder="Input new smurf age" />
                <input id="height" onChange={ handleChanges } type="number" placeholder="Input new smurf height" />
                <button type="submit">Save</button>
                <label htmlFor={ `editheight${ smurf.id }` }>Fill in all fields.</label>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, { editSmurf })(EditingSmurfForm)