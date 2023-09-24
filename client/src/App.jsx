import React, {useEffect} from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./assets/reset.scss"
import Main from "./pages/Main/Main";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import {useDispatch, useSelector} from "react-redux";
import RegistrationPage from "./pages/Auth/RegistrationPage/RegistrationPage";
import {auth} from "./actions/user";
import Dashbord from './pages/Dashbord/Dashbord';
import Files from './pages/Files/Files';
import Favorite from './pages/Favorite/Favorite';
import Bin from './pages/Bin/Bin';
import Settings from './pages/Settings/Settings';

function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
      {!isAuth ?
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />
        </Routes>
        :
        <Routes>
          <Route path="/dashbord" element={<Dashbord/>} />
          <Route path="/files" element={<Files/>} />
          <Route path="/favorite" element={<Favorite/>} />
          <Route path="/bin" element={<Bin/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
        
      }
      </div>
     </BrowserRouter>
  );
}

export default App;
