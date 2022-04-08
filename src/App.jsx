import './App.scss';
import React, {useEffect, Suspense} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import {connect, useDispatch} from "react-redux";
import {getAuthUserData} from "./redux/authReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import UsersPage from "./components/Users/UsersPage";
import HeaderComponent from "./components/Header/Header.component";
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";*/

//Ленивая загрузка компонент. Обязательно располагать после всех импортов
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

//My UserID is 22856

function App() {

    const dispatch = useDispatch()
    useEffect(() => {dispatch(getAuthUserData())}, []);

    return (
        <div className='grid_container'>
            <HeaderComponent />
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
                    <Route path='/users' element={<UsersPage /> }/>
                    <Route path='/login' element={<Login /> }/>
                </Routes>
                </Suspense>
            </div>

        </div>
    );
}

export default App;
