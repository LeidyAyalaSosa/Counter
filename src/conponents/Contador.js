import React, { useEffect, useState } from "react";

const Contador = () => {
  const [cuenta, setCuenta] = useState(100);

  let aumentar = () => {
    setCuenta(cuenta + 1);
  };

  let disminuir = () => {
    setCuenta(cuenta - 1);
  };

  /*const reset = () => {
    setCuenta(cuenta);
  };*/

  useEffect(() => {
    console.log(`El contador va en`, cuenta);
  }, [cuenta]);

  return (
    <div className="Contenedor">
      <center>
        <h1>CONTADOR</h1>
        <h2>{cuenta}</h2>
        <button className="Boton" onClick={aumentar}>
          Aumentar
        </button>
        <button className="Boton" onClick={disminuir}>
          Disminuir
        </button>
        <button
          className="Tres"
          onClick={() => {
            setCuenta(100);
          }}
        >
          Reset
        </button>
      </center>
    </div>
  );
};

export default Contador;
