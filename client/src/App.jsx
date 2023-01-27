import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

function App() {
    const clientId =
        "639009971982-rm1lv3aqfselb4u1rjslvrk4113oiq7a.apps.googleusercontent.com";
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <AccountProvider>
                <Messenger />
            </AccountProvider>
        </GoogleOAuthProvider>
    );
}

export default App;
