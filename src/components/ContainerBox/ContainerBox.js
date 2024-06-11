import React, { useState } from 'react';
import './ContainerBoxStyles.css'; // Importa los estilos CSS
import TextField from '@mui/material/TextField';

const ContainerBox = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    let inputValue = event.target.value;
    if (inputValue > 100) {
      inputValue = 100;
    }
    setValue(inputValue);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1>Password Generator</h1>
        <TextField
          id="outlined-number"
          label="Length MAX 100"
          type="number"
          value={value}
          onChange={handleChange}
          inputProps={{ maxLength: 3 }}
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            style: { textAlign: 'center' }, // Centra el contenido del input
          }}
          style={{ textAlign: 'center' }} // Centra todo el TextField
        />
      </div>
    </div>
  );
};

export default ContainerBox;