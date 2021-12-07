import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"

// pages & components
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Navbar from "./components/Navbar"
import Update from "./pages/update/Update"

function App() {
  const { authIsReady, user } = useContext(AuthContext)

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
          <Route path="/signup" element={user ? <Navigate to="/"/> : <Signup/>}/>
          <Route path="/update/:id" element={!user ? <Navigate to="/"/> : <Update/>}/>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
