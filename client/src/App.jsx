

import {BrowserRouter} from "react-router-dom"
import "./assets/reset.scss"
import Main from "./pages/Main/Main";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import RegistrationPage from "./pages/Auth/RegistrationPage/RegistrationPage";


function App() {
  return (
    // <BrowserRouter>
    //    <Routes>
    //      <Route path="/auth" element={<Auth/>} />
    //    </Routes>
    <div className="App">
      {/* <Auth/> */}
      {/* <>Hello</> */}
      {/* <Main/> */}
      {/* <LoginPage/> */}
      <RegistrationPage/>
    </div>
    // </BrowserRouter>
  );
}

export default App;
