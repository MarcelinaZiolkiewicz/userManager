import React, {useState} from 'react';

import Header from "./components/Header";
import AddNewUser from './components/AddNewUser';
import NewUserInfo from "./components/NewUserInfo";

import AppProvider from "./context/AppContext";

import './style/App.css';

const App = () => {

  return (
    <div className="App">
        <AppProvider>
            <Header/>
            <AddNewUser/>
            <NewUserInfo/>
        </AppProvider>
    </div>
  );
}

export default App;
