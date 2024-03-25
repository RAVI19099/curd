
import './App.css';
import Create from './COMPONENT/Create';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Read from './COMPONENT/Read';
import Update from './COMPONENT/Update';
function App() {
  return (
    <>
    <div className="App">
     <BrowserRouter>
         <Routes>
         <Route exact path="/" element={<Create />}> </Route>
         <Route exact path="/read" element={<Read/>}> </Route>
         <Route exact path="/update" element={<Update/>}> </Route>
         </Routes>
     </BrowserRouter>
     

    </div>
    </>
  );
}

export default App;
