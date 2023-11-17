import './App.css';
import { Route, Routes } from "react-router-dom";

// internal imports
import Home from './screen/Home';
import ApplePay from './screen/ApplePay';
import GooglePay from './screen/GooglePay'
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applepay" element={<ApplePay />} />
        <Route path="/googlepay" element={<GooglePay/>}/>
      </Routes>
    </>

  )
}

export default App
