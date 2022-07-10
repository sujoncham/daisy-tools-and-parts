import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import RequireAdmin from './components/Authentication/RequireAdmin';
import RequireAuth from './components/Authentication/RequireAuth';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import AddReview from './components/Pages/AddReview';
import Blogs from './components/Pages/Blogs';
import Contact from './components/Pages/Contact';
import AddProducts from './components/Pages/Dashboard/AddProducts';
import AddProfile from './components/Pages/Dashboard/AddProfile';
import AllUsers from './components/Pages/Dashboard/AllUsers';
import CheckoutForm from './components/Pages/Dashboard/CheckoutForm';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Dashboard404 from './components/Pages/Dashboard/Dashboard404';
import Message from './components/Pages/Dashboard/Message';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyProducts from './components/Pages/Dashboard/MyProducts';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import Payment from './components/Pages/Dashboard/Payment';
import ProfileEdit from './components/Pages/Dashboard/ProfileEdit';
import ReviewList from './components/Pages/Dashboard/ReviewList';
import Home from './components/Pages/Home';
import Page404 from './components/Pages/Page404';
import Purchase from './components/Pages/Purchase';
import PurchaseModal from './components/Pages/PurchaseModal/PurchaseModal';





function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/purchase/:purchaseId' element={<RequireAuth><PurchaseModal></PurchaseModal></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addReview' element={<AddReview></AddReview>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
        <Route path='/dashboard' element={
        <RequireAuth>
          <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='manageProduct' element={<MyProducts></MyProducts>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='reviewList' element={<ReviewList></ReviewList>}></Route>
          <Route path='addProducts' element={<AddProducts></AddProducts>}></Route>
          <Route path='payment/:payId' element={<Payment></Payment>}></Route>
          <Route path='checkoutForm' element={<CheckoutForm></CheckoutForm>}></Route>
          <Route path='addProfile' element={<AddProfile></AddProfile>}></Route>
          <Route path='profileEdit/:profileEdit' element={<ProfileEdit></ProfileEdit>}></Route>
          <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='message' element={<Message></Message>}></Route>
          <Route path='*' element={<Dashboard404></Dashboard404>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
