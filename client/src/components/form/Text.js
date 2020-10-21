import React, { Component } from 'react';
class Text extends Component {
  
  render() {
    const { field, value } = this.props;
    return (
      <div>
        <label htmlFor={field.name}>{field.label || field.name}</label>
        <input type="text" name={field.name} defaultValue={value || ''} placeholder={field.placeholder | ''}/>
      </div>
    )
  }
}
export default Text;
