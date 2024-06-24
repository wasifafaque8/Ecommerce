
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes/>
      <Route  path='/' element={<Shop/>}/>
      <Route  path='/mens' element={<ShopCategory category="men" />} />
      <Route  path='/womens' element={<ShopCategory category="women" />} />
      <Route  path='/kids' element={<ShopCategory category="kid" />} />
      <Route  path="/product" element={<Product/>} />
      <Route  path="/productId" element={<Product/>} />

      </BrowserRouter>

   
    </div>
  );
}

export default App;
