// import './App.css';
// import {Route,Routes,Navigate} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './pages/login/login';
// import SignUp from './pages/signup/signup';
// import Home from './pages/home/home';
// import {Toaster} from "react-hot-toast"
// import { useAuthContext } from './context/authContext';
// function App() {
//   const {authUser} =useAuthContext()

//   return (
    

//   <div>
//    <Routes>
// 				<Route path='/' element={ <Home /> } />
// 				<Route path='/login' element={<Login/>} />
// 				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />}/>
// 			</Routes>
     
//     <Toaster/>
//   </div>


//   );
// }

// export default App;


import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './context/authContext';

function App() {
  const { authUser } = useAuthContext(); // Ensure this is correctly invoked

  return (
    <div>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

