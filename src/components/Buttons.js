import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";

import '../style/EditButtons.sass';

const Buttons = ({actualId, editMe, editState}) => {

    const store = useContext(AppContext);

    const isEdited = (editState
        ? "Zatwierdź"
        : "Edytuj"
    );

    return(
       <div className="userButtons">
           <button onClick={editMe}>
               {isEdited}
           </button>
           <button onClick={store.handleDeleteUser.bind(this, actualId)}>
               Usuń
           </button>
       </div>
    );
}

export default Buttons;