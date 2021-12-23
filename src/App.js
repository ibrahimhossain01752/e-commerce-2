
import './App.css';

// import {Provider} from 'react-redux'
import Nav from './component/Nav';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import store from './store';
import Details from './component/Details';



function App() {
  return (
    <div className="App">
    {/* <Router>
    <Provider store={store}>
      
    
    <Nav/>
  <Home/>
   <Cart/>
  
    <Details path="/details/:id"/>
    
    </Provider>
    </Router> */}



<BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        
       
      </Route>
    </Routes>
  </BrowserRouter>
    


    </div>
  );
}

export default App;








