import React from "react";

export const BasicTypes = () => {
  const name: String = "Cristhian";
  const age:number = 29;
  const isActive:boolean = true

  const powers:string[] = ['React', 'React-Native'];
  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} - {age} - {isActive ? 'Activo' : 'No Activo'}

      <p>{powers.join(', ')}</p>
    </>
  );
};
