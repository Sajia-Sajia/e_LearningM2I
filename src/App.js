import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Reset from './Pages/Reset';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
    return (

        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/Reset" element={<Reset />} />
            </Routes>
        </div>

    );
}

export default App;
