
import Auth from "./pages/Auth/Auth";
import {BrowserRouter} from "react-router-dom"
import "./assets/reset.scss"
import Main from "./pages/Main/Main";


function App() {
  return (
    // <BrowserRouter>
    //    <Routes>
    //      <Route path="/auth" element={<Auth/>} />
    //    </Routes>
    <div className="App">
      {/* <Auth/> */}
      {/* <>Hello</> */}
      <Main/>
    </div>
    // </BrowserRouter>
  );
}

export default App;
