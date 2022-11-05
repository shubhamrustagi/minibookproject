import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import Messenger from "./components/Messenger";

function App() {
  const clientId =
    "913078823338-kpq023i230fb8pbobkb8ln3n666hm786.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
