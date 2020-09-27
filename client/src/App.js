import React from 'react';
import './App.css';
import InputText from './components/form/input/Text';
import InputPassword from './components/form/input/Password';
import Textarea from './components/form/Textarea';
import Checkbox from './components/form/input/Checkbox';
import Radio from './components/form/input/Radio';
import Select from './components/form/Select';

function App() {
  return (
    <div>
      <h1>Client</h1>
      <div>
        <h3>Form elements</h3>
        <div>
          <h4>Text Input</h4>
          <InputText />
        </div>

        <div>
          <h4>Password Input</h4>
          <InputPassword />
        </div>

        <div>
          <h4>Textarea</h4>
          <Textarea />
        </div>

        <div>
          <h4>Checkbox</h4>
          <Checkbox />
        </div>

        <div>
          <h4>Checkbox</h4>
          <Radio />
        </div>

        <div>
          <h4>Select</h4>
          <Select />
        </div>
      </div>
    </div>
  );
}

export default App;
