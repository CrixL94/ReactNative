// import { Funciones } from "./typescript/Funciones";
// import { ObjectLiteral } from "./typescript/ObjectLiteral";
// import { BasicTypes } from "./typescript/Basictypes";
// import { Counter } from "./Components/Counter";

import { LoginScreen } from "./Components/LoginScreen";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-3xl mb-5">React + TS</h1>
        {/* <BasicTypes/> */}
        {/* <ObjectLiteral/> */}
        {/* <Funciones/> */}
        {/* <Counter/> */}
        <LoginScreen/>
      </div>
    </AuthProvider>
  );
}

export default App;
