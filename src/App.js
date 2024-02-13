import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import New from "./components/New/New";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" Component={Dialogs}/>
                        <Route path="/profile" Component={Profile}/>
                        <Route path="/new" Component={New}/>
                        <Route path="/music" Component={Music}/>
                        <Route path="/setting" Component={Setting}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>);

}


export default App;
