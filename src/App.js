import React, { useEffect } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";

import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  auth
} from './authentication/firebase'


function App() {

  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  useEffect(
    () => {
      console.log(user)
      if (loading) {
        return;
      }

      if (!user) {
        navigate("/login");
      }

    }, [loading, user, navigate]
  )


  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;