import React, { Component } from 'react';
class Textarea extends Component {
  
  render() {
    const { field, value } = this.props;
    return (
      <div>
        <label htmlFor={field.name}>{field.label || field.name}</label>
        <textarea name={field.name} defaultValue={value || ''} rows={10} />
      </div>
    )
  }
}
export default Textarea;
