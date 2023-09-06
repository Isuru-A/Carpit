import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from "./Navigation.jsx";
import {BrowserRouter} from "react-router-dom";

function Index() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navigation/>
            </BrowserRouter>
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    const App = ReactDOM.createRoot(document.getElementById("root"));

    App.render(
        <React.StrictMode>
            <Index/>
        </React.StrictMode>
    )
}
