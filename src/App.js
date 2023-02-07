import "./App.css";
import CreateUser from "./Users/CreateUser";
import UserList from "./Users/UserList";
import {useState} from "react";
import AppLogin from "./Login/AppLogin";

const App = () => {

    const users = [
        {name: 'Lu', age: 52, id: 1},
        {name: 'John', age: 52, id: 2},
    ]

    const [userList, setUserList] = useState(users);

    const createUserHandler = function (name, age) {
        const id = Math.random().toString();
        setUserList((prevUserList) => {
            return [...prevUserList, {name: name, age: age, id: id}];
        });
    }

    return (
        <div>
            <AppLogin/>
            {/*<CreateUser onCreateUser={createUserHandler}/>*/}
            {/*<UserList users={userList}/>*/}
        </div>
    );
};

export default App;
