// SwitchesContext.js

import React, { createContext, useState } from 'react';

// Creamos el contexto
const SwitchesContext = createContext();

// Creamos el proveedor del contexto
const SwitchesProvider = ({ children }) => {
  const [switches, setSwitches] = useState({
    uppercase: false,
    symbols: false,
    lowercase: false,
    numbers: true,
  });

  const handleSwitchChange = (feature) => (event) => {
    const updatedSwitches = { ...switches, [feature]: event.target.checked };

    if (event.target.checked) {
      // Permitir la activación del switch
      setSwitches(updatedSwitches);
    } else {
      // Verificar si hay algún otro switch activo antes de desactivar este
      const lastActiveSwitch = Object.keys(updatedSwitches).find(
        (key) => updatedSwitches[key] && key !== feature
      );

      if (lastActiveSwitch) {
        // Si hay otro switch activo, permitir la desactivación de este switch
        setSwitches(updatedSwitches);
      }
    }
  };

  return (
    <SwitchesContext.Provider value={{ switches, handleSwitchChange }}>
      {children}
    </SwitchesContext.Provider>
  );
};

export { SwitchesProvider, SwitchesContext };