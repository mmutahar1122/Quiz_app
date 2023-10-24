// import React from 'react'

// const textcode = () => {
//   return (
//     <div>textcode</div>
//   )
// }

// export default textcode;

import React, { useState } from 'react';

function CodeExecutor() {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const handleSubmit = () => {
        try {
            // Evaluate the user's code
            const result = eval(code);
            setOutput(`Output:\n${result}`);
            // console.log('result',result);
        } catch (error) {
            setOutput(`Error:\n${error.toString()}`);
        }
        // console.log('code',code);
    };

    return (
        <div>
            <textarea
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="Write your JavaScript code here..."
                rows="10"
                cols="50"
            />
            <br />
            <button onClick={handleSubmit}>Submit Code</button>
            <pre>{output}</pre>
        </div>
    );
}

export default CodeExecutor;
