import React, { useState } from "react"
import { connect } from "react-redux";

import { addSmurf } from "../actions"

const Form = ({ addSmurf }) => {
    const [ input, setInput ] = useState({ name: "", age: "", height: "" })
    const handleChanges = e => setInput({ ...input, [e.target.id]: e.target.value })
    const handleSubmit = e => { 
        e.preventDefault(); 
        addSmurf({ name: `${ input.name }`, age: input.age, height: `${ input.height }cm` }); 
        console.log({ name: `${ input.name }`, age: JSON.parse(input.age), height: `${ input.height }cm` }); 
        setInput({ name: "", age: "", height: ""}) 
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" value={ input.name } id="name" placeholder="Input smurf name" onChange={ handleChanges } />
            <input type="number" value={ input.age } id="age" placeholder="Input smurf age" onChange={ handleChanges } />
            <input type="number" value={ input.height } id="height" placeholder="Input smurf height" onChange={ handleChanges } />
            <button type="submit">Add It!</button>
        </form>
    )
}

const mapStateToProps = state => {
    return { state }
}

export default connect(mapStateToProps, { addSmurf })(Form)