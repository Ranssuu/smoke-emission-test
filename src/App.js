import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import UserList from './components/UserList';
import UserInformation from './components/UserInformation';
import History from './components/History';
import AccountPage from './components/Account';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/userlist" element={<UserList/>} />
        <Route path="/userinfo" element={<UserInformation/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/account" element={<AccountPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
