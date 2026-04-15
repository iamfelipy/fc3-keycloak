import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { makeLoginUrl } from "./utils";
import { AuthContext } from "./AuthProvider";

export function Login() {
  const { auth } = useContext(AuthContext);
  // pra funcionar implicit flow precisa habilitar no keycloak
  // Client is not allowed to initiate browser login with given response_type. Implicit flow is disabled for the client.
  useEffect(() => {
    if (!auth) {
      window.location.href = makeLoginUrl();
    }
  }, [auth]);

  return auth ? <Navigate to="/admin" /> : <div>Loading...</div>;
}
