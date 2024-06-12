import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import './FeatureSwitches.css'; // Importa el archivo CSS para los estilos personalizados

const FeatureSwitches = () => {
    const [switches, setSwitches] = useState({
        uppercase: false,
        symbols: false,
        lowercase: false,
        numbers: true,
    });

    const handleSwitchChange = (feature) => (event) => {
        const updatedSwitches = { ...switches, [feature]: event.target.checked };

        if (event.target.checked) {
            setSwitches(updatedSwitches);
        } else {
            const lastActiveSwitch = Object.keys(updatedSwitches).find(
                (key) => updatedSwitches[key] && key !== feature
            );
            if (lastActiveSwitch) {
                setSwitches(updatedSwitches);
            }
        }
    };

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