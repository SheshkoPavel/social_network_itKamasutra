import './App.scss';
import React, {useEffect, Suspense} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Login from "./components/Login/Login";
import {useDispatch} from "react-redux";
import {getAuthUserData} from "./redux/authReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import UsersPage from "./components/Users/UsersPage";
import HeaderComponent from "./components/Header/Header.component";
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";*/

//Ленивая загрузка компонент. Обязательно располагать после всех импортов
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const Profile = React.lazy(() => import('./components/Profile/Profile'));

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
                    <Route path="/" element={<Profile  />}/>
                    <Route path="/profile/*" element={<Profile  />}/>
                    <Route path="/profile/:userId" element={<Profile  />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer  />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path='/users' element={<UsersPage /> }/>
                    <Route path='/login' element={<Login /> }/>
                </Routes>
                </Suspense>
            </div>

        </div>
    );
}

export default App;
