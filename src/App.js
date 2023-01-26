import { Route, Routes  } from "react-router-dom"
import Home from "./routes/Home";
import Themes from "./routes/Themes";
import About from "./routes/About";
import Signup from "./routes/Signup"
import Login from "./routes/Login"
// import Chat from "./routes/Chat";
// import Desk from "./routes/Desk";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/themes" element={<Themes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
