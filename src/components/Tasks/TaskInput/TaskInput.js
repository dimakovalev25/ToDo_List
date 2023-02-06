import React, {useState} from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }

  &.invalid input {
    border-color: orangered;
    background: #ee8c6d;
  }

  &.invalid label {
    color: orangered;
  }`


const TaskInput = (props) => {
    const [inputText, setInputText] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);

    const taskInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsInputValid(true)
        }
        setInputText(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (inputText.trim().length === 0) {
            setIsInputValid(false)
            return
        }
        props.onAddTask(inputText);
        setInputText('')
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl className={!isInputValid && 'invalid'}>
                      <label>Задачи</label>
                    <input value={inputText} type="text" onChange={taskInputChangeHandler}/>
            </FormControl>

            <Button type="submit">Добавить Задачу</Button>

        </form>
    );
};

export default TaskInput;
