import React from 'react';
import './index.css';
import TodoList from '../TodoList';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dashboard = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let username = location.state?.uname;

  const handleAttendance = () => {
    // Handle attendance logic
    console.log('Attendance marked');
    navigate('/Attendance')

  };

  const handleEditProfile = () => {
    // Handle edit profile logic
    console.log('Edit user profile');
  };

  const handleAddUser = () => {
    // Handle add user logic
    console.log('Add new user');
  };

  const [user, setUser] = useState();

  const fetchUser = async () => {
    try {
      const response = await fetch(`/user?param1=${username}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log('Error fetching user:', error);
    }
  };

  useEffect(() => {
    // Fetch the user list from the server
    fetchUser();
  }, []);

  return (
    <>
        <div className="admin-dashboard">

            <div className="dashboard-cover">
                <div className="profile-icon"></div>
            </div>

            <h1 className="dashboard-title">Welcome {user && user[0]?.emp_name}!</h1>
        </div>
        <div className='main'>
            <div className='dashboard-options'>
                <div className="container" onClick={handleAttendance}>
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
                <hr/>
            </div>

            <div className='todo'>
                <TodoList/>
            </div>

        </div>
    </>
  );
};

export default Dashboard;
