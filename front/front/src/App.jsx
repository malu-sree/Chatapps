import './App.css';
import {Route,Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import {Toaster} from "react-hot-toast"
function App() {
  return (
    

  <div>
   <Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/login' element={<Login/>} />
				<Route path='/signup' element={ <SignUp />} />
			</Routes>
     
    <Toaster/>
  </div>


  );
}

export default App;
