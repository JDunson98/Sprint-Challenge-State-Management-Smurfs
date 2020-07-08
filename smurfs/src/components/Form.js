import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [smurf, setNewSmurf] = useState({
        name: '',
        age: Number,
        height: ''
    })

    const handleChanges = e => {
        setNewSmurf({...smurf, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log("Smurf Posted",res)
        })
        .catch(err => {
            console.log("Smurf Posted ERROR", err)
        })
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={smurf.name}
                    onChange={handleChanges}
                />
                <input
                    type='number'
                    name='age'
                    placeholder='age'
                    value={smurf.age}
                    onChange={handleChanges}
                />
                <input 
                    type='number'
                    name='height'
                    placeholder='height'
                    value={smurf.height}
                    onChange={handleChanges}
                />
                <button>Add Smurf</button>
            </form>
        </div>
    );
}

export default Form;