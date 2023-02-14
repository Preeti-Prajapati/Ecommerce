
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Category1 from './pages/Category1';
import Category2 from './pages/Category2';
import Viewitem from './pages/Viewitem';
 import ContextProvider from './pages/ContextProvider';
import CartItems from './components/CartItems';
import FormControls from './pages/FormControls';

function App() {
  return (
    <div className="App">
      {/* <Viewitem/> */}
      <BrowserRouter>
       <ContextProvider>
        <Header>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category1' element={<Category1/>}/>
            <Route path='/category2' element={<Category2/>}/>
            <Route path='/viewitem/:id' element={<Viewitem/>}/>
            <Route path='/cartitems' element={<CartItems/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/form' element={<FormControls/>}/>
          </Routes>
        </Header>
        </ContextProvider> 
       </BrowserRouter>
      

    </div>
  );
}

export default App;
