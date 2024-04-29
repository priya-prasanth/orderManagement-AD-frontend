import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Header from '../components/Header.jsx';
import UserComponent from '../components/users/UserComponent.jsx';


const UsersScreen = () => {
    return (
        <>
            <Sidebar /> 
            <main className='main-wrap'>
                <Header />
                <UserComponent />
            </main>
        </>
    );
};

export default UsersScreen;