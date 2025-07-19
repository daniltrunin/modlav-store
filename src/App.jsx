import './App.css'
import './variables.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import HomeView from "./views/Desktop/HomeView/HomeView.jsx";
import MobileHomeView from "./views/Mobile/MobileHomeView/MobileHomeView.jsx";
import ProductDetailsView from "./views/Desktop/ProductDetailsView/ProductDetailsView.jsx";
import MobileProductDetailsView from "./views/Mobile/MobileProductDetailsView/MobileProductDetailsView.jsx";

/*
Для адаптива мы можем определять наш UI является Mobile или Desktop
с помощью useState и useEffect + window.innerWidth
и передавать true/false props в компоненты
*/

function App() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={innerWidth < 768 ? <MobileHomeView/> : <HomeView/>}
                />
                <Route
                    path="/product-details/:id"
                    element={innerWidth < 768 ? <MobileProductDetailsView/> : <ProductDetailsView/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
