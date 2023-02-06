import Card from "./Card";

const UserList = function (props) {

    return (

        <Card>

            <ul>
                {props.users.map(user => <li key={user.id}>{user.name} - {user.age} age</li>)}
            </ul>

        </Card>
    )

}

export default UserList;