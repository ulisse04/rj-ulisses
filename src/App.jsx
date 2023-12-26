import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
        {/* <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />


        <Route path="/not-found" element={ <h2>Not found</h2> }/>
        <Route path="*" element={ <Navigate to={"/not-found"}/> }/> */}
      </Routes>
      
    </BrowserRouter>
    /* <>
      <Navbar />
      <ItemListContainer greeting={'¡Bienvenidos a Electro-Bits!'}/>
    </> */
  )
}

export default App
