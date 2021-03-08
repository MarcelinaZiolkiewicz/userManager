import React, {useContext,useEffect} from 'react';
import {AppContext} from "../context/AppContext";

import UserCard from "./UserCard";

import '../style/UserInfoBox.sass';

const NewUserInfo = () => {
    const { isUserLogged, usersList } = useContext(AppContext);

    const users = usersList.map(user => (
        <UserCard
            name={user.name}
            surname={user.surname}
            id={user.userId}
            thisId={user.id}
            key={user.id}
            tasksList={user.tasks}
            editMe={user.editMe}
        />
    ));

    return(
        <div>
            <p>Użytkowników w bazie: {usersList.length}</p>
            {users.length > 0 ? users : null}
        </div>
    );
}

export default NewUserInfo;