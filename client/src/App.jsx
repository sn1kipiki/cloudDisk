
import Auth from "./pages/Auth/Auth";
import {BrowserRouter} from "react-router-dom"
import "./assets/reset.scss"


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/auth" element={<Auth/>} />
       </Routes>
    <div className="App">
      {/* <Auth/> */}
      {/* <>Hello</> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
