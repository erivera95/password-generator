import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';


const calculateStrengthLevel = (strength) => {
    if (strength < 25) {
        return "bajo";
    } else if (strength < 50) {
        return "medio";
    } else if (strength < 75) {
        return "alto";
    } else {
        return "muy alto";
    }
};
const PasswordStrengthIndicator = ({ strength }) => {

    const getStrengthLevelColor = (level) => {
        switch (level) {
            case "bajo":
                return "red";
            case "medio":
                return "yellow";
            case "alto":
                return "orange";
            case "muy alto":
                return "green";
            default:
                return "grey";
        }
    };

    const strengthLevel = calculateStrengthLevel(strength);
    const color = getStrengthLevelColor(strengthLevel);

    return (
        <LinearProgress
            variant="determinate"
            value={strength}
            sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: 'white', // Fondo blanco para la barra de progreso
                '& .MuiLinearProgress-bar': {
                    backgroundColor: color, // Color dinámico para la barra de progreso
                },
            }}
            color="inherit"
            style={{ backgroundColor: '#b3b3b3' }}
        />
    );
};

export default PasswordStrengthIndicator;
