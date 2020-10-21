import React, { Component } from 'react';

// Field components
import Text from './Text';
import Radio from './Radio';
import Password from './Password';
import Checkbox from './Checkbox';
import Textarea from './Textarea';
import Select from './Select';

/**
 * input text                   -> text
 * input password               -> password
 * input email                  -> email
 * input phone                  -> phone
 * input textarea               -> textarea
 * 
 * select radio                 -> radio
 * select dropdown              -> dropdown
 * 
 * multi-select checkbox        -> checkbox
 */

class DynamicFormField extends Component {
    components = {
        text: Text,
        email: Text,
        password: Password,
        radio: Radio,
        checkbox: Checkbox,
        textarea: Textarea,
        select: Select
    };

    render() {
       const TagName = this.components[this.props.field.type || 'text'];
       return <TagName field={this.props.field} value={this.props.data} />
    }
}
export default DynamicFormField;