import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from "./redux/reducers/say_hello";
import {Card} from "./Card";
import {getUsersFetch} from "./actions";
const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers([
            {
                id: 1,
                name: 'Leanne Graham',
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                }
            }
        ]));
    }, [])

    return (
        <div>

            Đức Anh
            {users.length > 0 && users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
            {users.length === 0 && <p>No users available!</p>}
        </div>
    )
}

export default Users;