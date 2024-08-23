
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Employ from './Employ';
import CreateEmploy from './CreateEmploy';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Employ />}></Route>
       <Route path='/create' element={<CreateEmploy />}></Route>
     </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
