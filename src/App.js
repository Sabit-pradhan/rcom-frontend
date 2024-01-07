
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUP';
import PrivateComponent from './components/PrivateComponents';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes>

      <Route element= {<PrivateComponent />}> 
      <Route path='/' element={<h1>Product Listing Components</h1>} />
      <Route path='/add' element={<AddProduct/>} />
      <Route path='/update' element={<h1> Update Product  Components</h1>} />
      <Route path='/logout' element={<h1>Logout Components</h1>} />
      <Route path='/profile' element={<h1>Profile Components</h1>} />
       </Route>   
       
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />


      </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
