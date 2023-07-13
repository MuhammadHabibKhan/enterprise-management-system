import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/Login"
import Dashboard from './Components/Dashboard';
import TodoList from './Components/TodoList';
import AttendanceForm from './Components/AttendanceForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/Dashboard' element={<Dashboard/>}></Route>
        <Route exact path='/ToDo' element={<TodoList/>}></Route>
        <Route exact path='/Attendance' element={<AttendanceForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
