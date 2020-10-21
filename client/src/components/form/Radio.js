import React, { Component } from 'react';
class Radio extends Component {
  
  render() {
    const { field, value } = this.props;
    return (
      <div>
        <div>
            <input type="radio" id="one" name="number" value="one" />
            <label htmlFor="one">One</label>
            <input type="radio" id="two" name="number" value="two" />
            <label htmlFor="two">Two</label>
            <input type="radio" id="three" name="number" value="three" />
            <label htmlFor="three">Three</label>
        </div>
        <label htmlFor={field.name}>{field.label || field.name}</label>
        <input type="text" name={field.name} defaultValue={value || ''} placeholder={field.placeholder | ''}/>
      </div>
    )
  }
}
export default Radio;

// function Input() {
//     return (
//         <div>
//             <input type="radio" id="one" name="number" value="one" />
//             <label htmlFor="one">One</label>
//             <input type="radio" id="two" name="number" value="two" />
//             <label htmlFor="two">Two</label>
//             <input type="radio" id="three" name="number" value="three" />
//             <label htmlFor="three">Three</label>
//         </div>
//     );
// }

// export default Input;