import React, {useState} from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},

    user: 'admin'
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const LogoutHandler = () => {
        setIsLoggedIn(false);
    }
    const LoginHandler = () => {
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: LogoutHandler, onLogin: LoginHandler }}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;
