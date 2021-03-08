import React, { useContext, useState } from 'react';

import TaskList from "./TaskList";
import Buttons from "./Buttons";

import '../style/AddNewUser.sass';

const UserCard = ({name, surname, id, thisId, tasksList,editMe}) => {

    const [userName, setUserName] = useState(name);
    const [userSurname, setUserSurname] = useState(surname);
    const [userId, setUserId] = useState(id);
    const [userEdit, setUserEdit] = useState(editMe);

    const handleEditName = e => {
        setUserName(e.target.value);
    }

    const handleEditSurname = e => {
        setUserSurname(e.target.value);
    }

    const handleEditID = e => {
        setUserId(e.target.value);
    }

    const handleEditUser = () => {
        setUserEdit(prevValue => !prevValue);
    }

    const nameElement = (userEdit
        ? <input
                value={userName}
                onChange={handleEditName}
                type="text"
                className="editInput"
            />
        : userName
    );

    const surnameElement = (userEdit
        ? <input
                value={userSurname}
                onChange={handleEditSurname}
                type="text"
                className="editInput"
            />
        : userSurname
    );

    const idElement = (userEdit
        ? <input
                value={userId}
                onChange={handleEditID}
                type="number"
                className="editInput"
            />
        : userId
    );

    return(
        <div className="userInfoBox">
            <h2>{nameElement} {surnameElement}</h2>
            <p>Numer kontrolny: <strong>{idElement}</strong></p>
            <TaskList taskList={tasksList} toAddId={thisId}/>
            <Buttons actualId={thisId} editMe={handleEditUser} editState={userEdit}/>
        </div>
    );
}

export default UserCard;