import React, { useState } from "react";

import Login from "./Login";
import Home from "./Home";
import MainHeader from "./MainHeader";
import AuthContext from "../context/auth_context";

function AppLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            user: 'admin'
        }}>
            <MainHeader onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>



        </AuthContext.Provider>

    </React.Fragment>
  );
}

export default AppLogin;
