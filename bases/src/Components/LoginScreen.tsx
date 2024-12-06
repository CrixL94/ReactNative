import { useAuthContext } from "../context/AuthContext";

export const LoginScreen = () => {
  const { isChecking } = useAuthContext();

  if (isChecking) {
    return <h1>Verificando Login</h1>;
  }
  
  return (
    <>
      <h3>Login</h3>
      <span></span>
    </>
  );
};
