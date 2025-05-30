import React from 'react';
function Child({handleTextChange, text}){
    return (
        <div>
            <h1>Child</h1>
            <input type="text" placeholder="Enter text" value={text} onChange={(e)=>handleTextChange(e.target.value)} />
            <button>Submit</button>
        </div>
    );
}
export default Child;