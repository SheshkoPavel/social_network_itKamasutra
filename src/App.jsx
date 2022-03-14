import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Test_ClassComponent from "./components/Test_ClassComponent";
import Test_Input_ClassComponent from "./components/Test_Input_ClassComponent";
import TestInputF from "./components/Test_Input_F";
import {Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {

    return (
        <div className='grid_container'>
            <Header/>
            <Navbar/>
            <div className='grid_container_content'>
                <Routes>
                    <Route path="/" element={<Profile store={props.store} />}/>
                    <Route path="profile" element={<Profile store={props.store} />}/>
                    <Route path="dialogs/*" element={<DialogsContainer store={props.store} />}/>
                    <Route path="news" element={<News/>}/>
                    <Route path='music' element={<Music/>}/>
                    <Route path='settings' element={<Settings/>}/>
                </Routes>
            </div>

{/*            <Test_ClassComponent count={5} />
            <Test_Input_ClassComponent name={"Peter"} />
            <TestInputF />*/}
        </div>
    );
}

export default App;
