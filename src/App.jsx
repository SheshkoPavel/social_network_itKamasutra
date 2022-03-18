import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Test_ClassComponent from "./components/Test_ClassComponent";
import Test_Input_ClassComponent from "./components/Test_Input_ClassComponent";
import TestInputF from "./components/Test_Input_F";
import {Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

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
                </Routes>
            </div>

{/*            <Test_ClassComponent count={5} />
            <Test_Input_ClassComponent name={"Peter"} />
            <TestInputF />*/}
        </div>
    );
}

export default App;
