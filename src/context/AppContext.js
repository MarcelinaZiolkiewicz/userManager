import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const AppProvider = (props) => {

    const [usersList, updateUsersList] = useState([]);
    const [userName, setAddName] = useState("");
    const [userSurname, setAddSurname] = useState("");
    const [userPassword, setAddPassword] = useState("");
    const [userIdNumber, setAddIdNumber] = useState("");
    const [isValidMsg, setIsValidMsg] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleInputName = e => setAddName(e.target.value);
    const handleInputSurname = e => setAddSurname(e.target.value);
    const handleInputPassword = e => setAddPassword(e.target.value);
    const handleInputIdNumber = e => setAddIdNumber(e.target.value);

    const clearInputs = () => {
        setAddName("");
        setAddSurname("")
        setAddPassword("")
        setAddIdNumber("")
    }

    const regexNameTest = (value) => {
        var regex = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{3,15}$/;
        return !regex.test(value);
    }

    const regexPasswordTest = value => {
        var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,32}$/;
        return !regex.test(value);
    }

    const isValidInput = () => {

        if (regexNameTest(userName) && regexNameTest(userSurname) && regexPasswordTest(userPassword) && userIdNumber.length != 5){
            setIsValidMsg("Musisz wprowadzić dane");
            setIsValid(false);
        }
        else if (regexNameTest(userName)) {
            setIsValidMsg("błędne imię");
            setIsValid(false);
        }
        else if (regexNameTest(userSurname)) {
            setIsValidMsg("błędne nazwisko nazwisko");
            setIsValid(false);
        }
        else if (regexPasswordTest(userPassword)) {
            setIsValidMsg("hasło powinno mieć co najmniej 8 znaków, zawierać przynajmniej jedną cyfrę, dużą literę i znak specjalny");
            setIsValid(false);
        }
        else if (userIdNumber.length != 5) {
            setIsValidMsg("Nie właściwa długość numeru kontrolnego");
            setIsValid(false);
        }
        else {
            setIsValidMsg("");
            setIsValid(true);

            updateUsersList([
                ...usersList,
                {
                    id: usersList.length,
                    name: userName,
                    surname: userSurname,
                    userId: userIdNumber,
                    password: userPassword,
                    tasks: [],
                    editMe: false
                }
            ])

            // clearInputs();
        }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        isValidInput();
    }

    const handleDeleteUser = (id) => {
        const users = [... usersList];
        const indexToDelete = users.findIndex(user => user.id === id);
        users.splice(indexToDelete, 1);
        updateUsersList(users);
    }

    const storeObject = {
        userName,
        userSurname,
        userPassword,
        userIdNumber,
        usersList,
        isValidMsg,
        handleInputPassword,
        handleInputSurname,
        handleInputName,
        handleAdd,
        handleInputIdNumber,
        handleDeleteUser,
    }

    return(
      <AppContext.Provider value={storeObject}>
          {props.children}
      </AppContext.Provider>
    );
}

export default AppProvider;