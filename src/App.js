import "./styles.css";
import Header from "./Components/header";
import { useState } from "react";
import Sidebar from "./Components/header/Sidebar";
import FilesView from "./Components/header/FilesView";
import { auth, provider } from "./firebase";
export default function App() {
  const [user, setUser] = useState();
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
      });
    }
  };
  return (
    <div className="app">
      {user ? (
        <>
          <Header onClick={auth.signOut()} userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
          </div>
        </>
      ) : (
        <div className="app__login">
          <img
            src="https://www.logo.wine/a/logo/OneDrive/OneDrive-Logo.wine.svg"
            alt=""
          />
          <button onClick={handleLogin}>Login To Aswin Drive</button>
        </div>
      )}
    </div>
  );
}

