// import { Funciones } from "./typescript/Funciones";
// import { ObjectLiteral } from "./typescript/ObjectLiteral";
// import { BasicTypes } from "./typescript/Basictypes";

import { Counter } from "./Components/Counter";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-3xl mb-5">React + TS</h1>
      {/* <BasicTypes/> */}
      {/* <ObjectLiteral/> */}
      {/* <Funciones/> */}
      <Counter/>

    </div>
  );
}

export default App;
