import React, {useState} from "react";

import Card from "./Card";
import styles from './CreateUser.module.css'
import Button from "./Button";
// import ErrorModal from "./ErrorModal";

const CreateUser = function (props) {

    const [inputName, setInputName] = useState('')
    const [inputAge, setInputAge] = useState('')

    const nameChangeHandler = function (e) {
        setInputName(e.target.value);
    }
    const ageChangeHandler = function (e) {
        setInputAge(e.target.value);
    }

    const createUserHandler = function (e) {
        e.preventDefault();

        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            return
        }

        if (+inputAge < 1) {
            return;
        }

        props.onCreateUser(inputName, inputAge)

        setInputName('');
        setInputAge('');

    }

    return (
        <>
            {/*<ErrorModal title={'Error'} message={'Something went wrong!'}></ErrorModal>*/}

            <Card>
                <form onSubmit={createUserHandler}>
                    <label htmlFor={'name'}>Name</label>
                    <input value={inputName} onChange={nameChangeHandler} className={styles.input} id={'name'}
                           type={'text'}></input>

                    <label htmlFor={'age'}>Age</label>
                    <input value={inputAge} onChange={ageChangeHandler} className={styles.input} id={'age'}
                           type={'number'}></input>

                    <Button onClick={createUserHandler} type={'submit'}>ADD</Button>
                </form>
            </Card>
        </>


    )
}

export default CreateUser;