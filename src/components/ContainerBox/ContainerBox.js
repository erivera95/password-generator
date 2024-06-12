import React, { useState } from 'react';
import './ContainerBoxStyles.css'; // Importa los estilos CSS
import TextField from '@mui/material/TextField';
import FeatureSwitches from '../FeaturesBox/FeatureSwitches';
import { SwitchesProvider } from '../../context/SwitchesContext';

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
    <SwitchesProvider>

      <div className="container">
        <div className="inner-container">
          <h1>Password Generator</h1>

          <TextField
            id="outlined-number"
            label="Length"
            type="number"
            value={value}
            onChange={handleChange}
            inputProps={{ maxLength: 3 }}
            size="small"
            InputLabelProps={{
              shrink: true,
              style: { textAlign: 'center' }
            }}
            helperText="Maximum limit 100 "
          />
          <FeatureSwitches />
        </div>
      </div>
    </SwitchesProvider>
  );
};

export default ContainerBox;