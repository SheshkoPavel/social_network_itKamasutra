import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Test_ClassComponent from "./components/Test_ClassComponent";
import Test_Input_ClassComponent from "./components/Test_Input_ClassComponent";
import TestInputF from "./components/Test_Input_F";


function App() {
    return (
        <div className="grid-container">
            <Header/>
            <Navbar/>
            <Profile/>
            {/*<Test_ClassComponent count={5} />*/}
            {/*<Test_Input_ClassComponent name={"Peter"} />*/}
            {/*<TestInputF />*/}
        </div>
    );
}

export default App;
