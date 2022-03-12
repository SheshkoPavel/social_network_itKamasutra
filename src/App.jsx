import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Test_ClassComponent from "./components/Test_ClassComponent";
import Test_Input_ClassComponent from "./components/Test_Input_ClassComponent";
import TestInputF from "./components/Test_Input_F";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {

    return (
        <div className='grid_container'>
            <Header/>
            <Navbar/>
            <div className='grid_container_content'>
                <Routes>
                    <Route path="/" element={<Profile profilePage={props.state.profilePage}
                                                      dispatch={props.dispatch}
                    />}/>
                    <Route path="profile"
                           element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="dialogs/*" element={<Dialogs state={props.state.dialogPage}/>}/>
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
