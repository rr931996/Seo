import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layouts/Layouts.jsx';
import MainPage from './Pages/MainPage.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
