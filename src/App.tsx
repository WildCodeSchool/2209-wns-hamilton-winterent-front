import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Auth from "./components/Auth";
import Login from "./pages/page-authentification/Login";
import Register from "./pages/page-authentification/Register";
import UserConnect from "./components/UserConnect";
import LoginProvider from "./context/LoginProvider";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Category from "./components/category/Category";
import Destination from "./components/destination/Destination";
import Shop from "./components/shop/Shop";
import "./App.css";
import UserProfile from "./pages/page-profile/UserProfile";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/home" element={<Home />} />
            <Route path={`/shop/:id`} element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route element={<Auth />}>
              <Route path="/userconnect" element={<UserConnect />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
