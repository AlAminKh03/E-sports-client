
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddItems from './Pages/AddItems/AddItems/AddItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/AddItems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>

      </Routes>
    </div>
  );
}

export default App;
