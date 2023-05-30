import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Hotel from './Hotel';
import Singleview from './Singleview';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
        <Header/>
        {/* <Banner/> */}
        <Routes>
          <Route path='/' element={<Hotel/>}></Route>
          <Route path='/singleview/:id' element={<Singleview/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
