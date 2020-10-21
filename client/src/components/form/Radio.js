import React from 'react';

function Input() {
    return (
        <div>
            <input type="radio" id="one" name="number" value="one" />
            <label htmlFor="one">One</label>
            <input type="radio" id="two" name="number" value="two" />
            <label htmlFor="two">Two</label>
            <input type="radio" id="three" name="number" value="three" />
            <label htmlFor="three">Three</label>
        </div>
    );
}

export default Input;