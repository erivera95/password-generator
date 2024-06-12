import React, { useContext  } from 'react';
import Switch from '@mui/material/Switch';
import './FeatureSwitches.css';
import { SwitchesContext } from '../../context/SwitchesContext';


const FeatureSwitches = () => {

    const { switches, handleSwitchChange } = useContext(SwitchesContext);

    return (
        <div className="feature-switches-container">
            <div className="switch-row">
                <div className="switch-item">
                    <label>UpperCase</label>
                    <Switch
                        checked={switches.uppercase}
                        onChange={handleSwitchChange('uppercase')}
                        color="primary"
                    />
                </div>
                <div className="switch-item">
                    <Switch
                        checked={switches.symbols}
                        onChange={handleSwitchChange('symbols')}
                        color="primary"
                    />
                    <label>Symbols</label>
                </div>
            </div>
            <div className="switch-row">
                <div className="switch-item">
                    <label>LowerCase</label>
                    <Switch
                        checked={switches.lowercase}
                        onChange={handleSwitchChange('lowercase')}
                        color="primary"
                    />
                </div>
                <div className="switch-item">
                    <Switch
                        checked={switches.numbers}
                        onChange={handleSwitchChange('numbers')}
                        color="primary"
                    />
                    <label>Numbers</label>
                </div>
            </div>
        </div>
    );
};

export default FeatureSwitches;