import './App.css';
import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/authReducer";


function App(props) {

    useEffect(() => {props.getAuthUserData()}, []);

    return (
        <div className='grid_container'>
            <HeaderContainer />
            <Navbar/>
            <div className='grid_container_content'>
                <Routes>
                    <Route path="/" element={<ProfileContainer  />}/>
                    <Route path="/profile/*" element={<ProfileContainer  />}/>
                    <Route path="/profile/:userId" element={<ProfileContainer  />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer  />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UsersContainer /> }/>
                    <Route path='/login' element={<Login /> }/>
                </Routes>
            </div>

        </div>
    );
}

export default connect(null, {getAuthUserData})(App);
