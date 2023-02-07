import React from "react";

import Card from "./Card";
import styles from "./Home.module.css";
import AuthContext from "../context/auth_context";

const Home = (props) => {
    return (
        <AuthContext.Consumer>
            {(ctx) => {
                return (
                    <Card className={styles.home}>
                        <h1>Рады Вас Видеть Снова!{ctx.user}</h1>
                    </Card>
                )
            }
            }


        </AuthContext.Consumer>


    );
};

export default Home;
