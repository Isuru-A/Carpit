import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.jsx";

function Index() {
    return (
        <div className="app">
            <BrowserRouter>
                <Router/>
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
