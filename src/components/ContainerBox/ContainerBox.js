import React, { useState } from 'react';
import './ContainerBoxStyles.css'; // Importa los estilos CSS
import TextField from '@mui/material/TextField';
import FeatureSwitches from '../FeaturesBox/FeatureSwitches';
import PasswordStrengthIndicator from '../PasswordStrengthIndicator/PasswordStrengthIndicator';
import { SwitchesProvider } from '../../context/SwitchesContext';
import Button from '@mui/material/Button';

const ContainerBox = () => {

  const passwordStrength = 50; // Por ejemplo


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
          <Button className="generateButton" variant="contained">Generate</Button>

          <div>
            <PasswordStrengthIndicator strength={passwordStrength} />
          </div>

        </div>
      </div>
    </SwitchesProvider>
  );
};

export default ContainerBox;