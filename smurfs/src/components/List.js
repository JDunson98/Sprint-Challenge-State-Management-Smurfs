import React, { useContext } from 'react';
import SmurfContext from '../contexts/SmurfContext';

const List = () => {
    const smurfs = useContext(SmurfContext);

    return (
        <div>
            {smurfs.map(smurf => (
                <div className="smurf">
                    <h3 key={smurf.id}>Name: {smurf.name}, Age: {smurf.age}, Height: {smurf.height}</h3> 
                </div>
            ))}
        </div>
    )
}

export default List;