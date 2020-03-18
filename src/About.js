import React from 'react';

export default (props)=>{
    console.log(props);
    
    return (
        <div>
            <h2>About US</h2>
            <hr/>
            <button onClick={() => props.history.push('/')}>Home</button>
        </div>
    );
}