import React from 'react';

function Select() {
  return (
    <div>
        <label htmlFor="gen-select">Choose an option:</label>
        <select id="gen-select" name="gen-select">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
        </select>
    </div>
  );
}

export default Select;