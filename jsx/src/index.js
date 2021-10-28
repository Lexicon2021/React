import React from 'react';
import ReactDOM from 'react-dom';



const App =  () => {
    const buttonText = {text: 'Click Me!'};

    return (
        <div>
            <label className="label">Enter Name:</label>
            <input type="text" />
            <button style={{backgroundColor: 'green', color: 'white'}}>{buttonText.text}</button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));