import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/Shop/shop.component';
import CheckoutComponent from './routes/checkout/checkout-component';



const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='checkout' element={<CheckoutComponent/>}/>
      </Route>
    </Routes>
  );
}

export default App;
