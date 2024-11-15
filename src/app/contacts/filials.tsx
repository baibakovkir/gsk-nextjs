import React from "react";
import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Filials() {
  return (
  <div>
      <Select
        defaultValue={options[0]}
        options={options}
      />
  </div>


  );
}