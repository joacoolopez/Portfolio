import './App.css';
import Index from './routes/index'
import SignIn from './routes/SignIn';
import Informacion from './routes/Informacion';
import Registrarse from './routes/Registrarse';

import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/informacion' element={<Informacion/>}></Route>
        <Route path='/register' element={<Registrarse/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
