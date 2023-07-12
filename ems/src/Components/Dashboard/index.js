import React from 'react';
import './index.css';
import TodoList from '../TodoList';

const Dashboard = () => {
  const handleAttendance = () => {
    // Handle attendance logic
    console.log('Attendance marked');
  };

  const handleEditProfile = () => {
    // Handle edit profile logic
    console.log('Edit user profile');
  };

  const handleAddUser = () => {
    // Handle add user logic
    console.log('Add new user');
  };

  return (
    <>
        <div className="admin-dashboard">

            <div className="dashboard-cover">
                <div className="profile-icon"></div>
            </div>

            <h1 className="dashboard-title">Welcome!</h1>
        </div>

        <div className='main'>
            <div className='dashboard-options'>

                <div className="container">
                    <img src={require('./calender.png')} className="image"/>
                    <div className="overlay">
                        <div className="text">Mark Attendance</div>
                    </div>
                </div>

                <div className="container">
                    <img src={require('./userplus.png')} className="image"/>
                    <div className="overlay">
                        <div className="text">New Profile</div>
                    </div>
                </div>

                <div className="container">
                    <img src={require('./userchange.png')} className="image"/>
                    <div className="overlay">
                        <div className="text">Edit User Profile</div>
                    </div>
                </div>

            </div>

            <div className='todo'>
                <TodoList/>
            </div>

        </div>
    </>
  );
};

export default Dashboard;
