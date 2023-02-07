import React from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    user: 'admin'
});

export default AuthContext;
