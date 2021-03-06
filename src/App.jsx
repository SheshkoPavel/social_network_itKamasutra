import './App.scss';
import React, {useEffect, Suspense} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer, {UserPage} from "./components/Users/UsersContainer.tsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/authReducer.ts";
import Preloader from "./components/Common/Preloader/Preloader";
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";*/

//Ленивая загрузка компонент. Обязательно располагать после всех импортов
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


//My UserID is 22856

function App(props) {

    useEffect(() => {props.getAuthUserData()}, []);

    return (
        <div className='grid_container'>
            <HeaderContainer />
            <Navbar/>
            <div className='content'>
                <Suspense fallback={<Preloader/>}>
                <Routes>
                    <Route path="/" element={<ProfileContainer  />}/>
                    <Route path="/profile/*" element={<ProfileContainer  />}/>
                    <Route path="/profile/:userId" element={<ProfileContainer  />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer  />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UserPage /> }/>
                    <Route path='/login' element={<Login /> }/>
                </Routes>
                </Suspense>
            </div>

        </div>
    );
}

export default connect(null, {getAuthUserData})(App);
