import React from "react";

import styles from "./Navigation.module.css";
import AuthContext from "../context/auth_context";

const Navigation = (props) => {
  return (

      <AuthContext.Consumer>

          {(ctx) => {
              console.log(ctx)
              return (
                  <nav className={styles.nav}>
                      <ul>
                          {ctx.isLoggedIn && (
                              <li>
                                  <a href="/">Пользователи</a>
                              </li>
                          )}
                          {ctx.isLoggedIn && (
                              <li>
                                  <a href="/">Админ</a>
                              </li>
                          )}
                          {ctx.isLoggedIn && (
                              <li>
                                  <button onClick={ctx.onLogout}>Выйти</button>
                              </li>
                          )}
                      </ul>
                  </nav>

              )
          }}


      </AuthContext.Consumer>

  );
};

export default Navigation;
