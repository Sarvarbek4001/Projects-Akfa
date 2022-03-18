import React from 'react';
import './App.scss';
import UnauthenticatedApp from './pages/UnauthenticatedApp/UnauthenticatedApp';
import useToken from './hooks/useToken';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import {Routes,Route} from "react-router-dom";
function App() {
   const [token,setToken] = useToken();
   if(token){
      return(
        <>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </>
      )
   }else{
     return <UnauthenticatedApp/>
   }
 
}
export default App;
