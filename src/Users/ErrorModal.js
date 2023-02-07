import Card from "./Card";
import Button from "./Button";

import styles from './ErrorModal.module.css'
import React from "react";

// import ReactDom from "react-dom"

const Backdrop = function (props) {

    return (
        <div className={styles.backdrop}>
        </div>
    )
}
const Modal = function (props) {


    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onCloseModal}>Close</Button>
            </footer>
        </Card>
    )
}
const ErrorModal = function (props) {

    return (
        <React.Fragment>
            {/*{ReactDom.createPortal(<Backdrop/>, document.getElementById('backdrop'))}*/}
            {/*<Backdrop/>*/}
                <Modal onCloseModal={props.onCloseModal} title={'Error'}/>
         </React.Fragment>
    )
}

export default ErrorModal;