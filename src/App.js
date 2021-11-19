import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"

// pages & components
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Navbar from "./components/Navbar"

function App() {
  const { authIsReady } = useContext(AuthContext)

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
