import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user).user;

  return (
    <div className="App">
      {console.log(user)}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
