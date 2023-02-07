import React, {useState, useRef, useEffect} from "react";

import Card from "./Card";
import styles from './CreateUser.module.css'
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const CreateUser = function (props) {

    const [inputName, setInputName] = useState('')
    const [inputAge, setInputAge] = useState('')
    const [error, setError] = useState(false)

    const nameInputRef = useRef();
    const ageInputRef = useRef();


    useEffect(() => {
        const effect = 'effect';
        console.log(effect)

    },[error])

    const nameChangeHandler = function (e) {
        setInputName(e.target.value);
    }
    const ageChangeHandler = function (e) {
        setInputAge(e.target.value);
    }

    const createUserHandler = function (e) {
        e.preventDefault();
        // console.log(nameInputRef.current.value)

        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            setError(true)
            return
        }

        if (+inputAge < 1) {
            setError(true)
            return;
        }

        props.onCreateUser(inputName, inputAge)

        setInputName('');
        setInputAge('');

    }

    // const errorHandler = () => {
    //     setError(false);
    // };
    const errorHandler = function () {
        setError(false);
    };

    return (
        <>
            {error ? <ErrorModal onCloseModal={errorHandler} title={'Error'}
                                 message={'Something went wrong!'}></ErrorModal> :
                <Card>
                    <form onSubmit={createUserHandler}>
                        <label htmlFor={'name'}>Name</label>
                        <input
                            ref={nameInputRef}
                            value={inputName}
                            onChange={nameChangeHandler}
                            className={styles.input}
                            id={'name'}
                            type={'text'}>

                        </input>

                        <label htmlFor={'age'}>Age</label>
                        <input
                            ref={ageInputRef}
                            value={inputAge}
                            onChange={ageChangeHandler}
                            className={styles.input}
                            id={'age'}
                            type={'number'}>

                        </input>

                        <Button onClick={createUserHandler} type={'submit'}>ADD</Button>
                    </form>
                </Card>}
        </>
    )
}

export default CreateUser;