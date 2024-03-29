import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/utils/Auth';
import Login from './pages/page-authentification/Login';
import Register from './pages/page-authentification/Register';
import LoginProvider from './context/LoginProvider';
import Header from './components/header/Header';
import Home from './components/Home';
import Footer from './components/footer/Footer';
import UserProfile from './pages/page-profile/user-profile/UserProfile';
import Category from './pages/page-category/Category';
import Destination from './pages/page-destination/Destination';
import Shop from './pages/page-shop/Shop';
import InfosGeneral from './components/InfosGeneral';
import ShopContextProvider from './context/ShopContextProvider';
import Products from './pages/page-products/Products';
import Cart from './pages/page-cart/Cart';
import Admin from './pages/page-admin/Admin';
import AuthAdmin from './components/utils/AuthAdmin';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <ShopContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Category />} />
              <Route path="/home" element={<Home />} />
              <Route path={`/shop/:id`} element={<Shop />} />
              <Route path={`/products`} element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<AuthAdmin />}>
                <Route index element={<Admin />} />
              </Route>
              <Route path='/profile' element={<Auth />}>
                <Route index element={<UserProfile />} />
              </Route>
            </Routes>
            <InfosGeneral />
            <Footer />
          </BrowserRouter>
        </ShopContextProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
