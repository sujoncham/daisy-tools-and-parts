import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import RequireAuth from './components/Authentication/RequireAuth';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import Blogs from './components/Pages/Blogs';
import Contact from './components/Pages/Contact';
import AddProducts from './components/Pages/Dashboard/AddProducts';
import AddReview from './components/Pages/Dashboard/AddReview';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyProducts from './components/Pages/Dashboard/MyProducts';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import Home from './components/Pages/Home';
import Purchase from './components/Pages/Purchase';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/purchase' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={
        <RequireAuth>
          <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProducts></MyProducts>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='addProducts' element={<AddProducts></AddProducts>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
