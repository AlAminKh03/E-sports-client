
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login'
import RequireAuth from '../src/Pages/Login/RequireAuth/RequireAuth'
import ManageProducts from './Pages/ManageProducts/ManageProducts/ManageProducts';
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
        <Route path='/manageproducts' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/addproducts' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>


      </Routes>
    </div>
  );
}

export default App;
