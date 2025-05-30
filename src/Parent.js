import Child from "./child";
import React, { useState } from "react";
function Parent() {
    const [text, setText] = useState("");
    const handleTextChange = (e) => {
        console.log('e', e);
        setText(e);
    };
    const handleSubmit = () => {
        console.log("Submitted text:", text);
    };
    console.log('test', text);
    return (
        <div>
            <h1>Parent</h1>
            <Child handleTextChange={handleTextChange} text={text} />
        </div>
    );
}
export default Parent;