import React, { useContext, useRef, useEffect} from 'react';
import {AppContext} from "../context/AppContext";

import '../style/AddNewUser.sass';

const AddNewUser = () => {

    const store = useContext(AppContext);
    const firstInputRef = useRef()

    useEffect(
        () => {
            firstInputRef.current.focus();
        }, []
    )

    return(
      <div className="addNewUser">
          <p>Dodaj nowego pracownika do listy</p>
          <div>
              <form>
                  <label>
                      <input
                          type="text"
                          placeholder="Imie"
                          onChange={store.handleInputName}
                          value={store.userName}
                          ref={firstInputRef}
                      />
                  </label>
                  <label>
                      <input
                          type="text"
                          placeholder="Nazwisko"
                          onChange={store.handleInputSurname}
                          value={store.userSurname}
                      />
                  </label>
                  <label>
                      <input
                          type="number"
                          placeholder="Numer kontrolny"
                          onChange={store.handleInputIdNumber}
                          value={store.userIdNumber}
                      />
                  </label>
                  <label>
                      <input
                          type="password"
                          placeholder="Hasło"
                          onChange={store.handleInputPassword}
                          value={store.userPassword}
                      />
                  </label>
              </form>
              <div className="submitBox">
                  <button onClick={store.handleAdd}>
                      Dodaj osobę do bazy
                  </button>
                  {store.isValidMsg ?  <p>Błędne dane - {store.isValidMsg}</p> : null}
              </div>
          </div>
      </div>
    );
}

export default AddNewUser;