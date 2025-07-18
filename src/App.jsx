import './App.css'
import './variables.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.jsx";

/*
Для адаптива мы можем определять наш UI является Mobile или Desktop
с помощью useState и useEffect + window.innerWidth
и передавать true/false props в компоненты
*/

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
