import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import MpesaPayment from './components/MpesaPayment';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header bg-info">
        <h1 className='display-3 text-center p-3 fw-bold text-warning'>Sokogarden-buy and sell online</h1>
      </header>
      <NavBar/>
      <Routes>
        {/* map a single route */}
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/' element={<GetProducts/>}/>
        <Route path='/mpesapayment' element={<MpesaPayment/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
