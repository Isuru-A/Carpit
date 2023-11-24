import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.jsx";
import {MobileView, BrowserView} from "react-device-detect";

function Index() {
    return (
        <div className="app">
            <BrowserView>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </BrowserView>
            <MobileView>
                <div className="mobile-block">
                    <h1>Carpit Automotive is not available on mobile yet</h1>
                    <span>Please visit on a desktop browser</span>
                </div>
            </MobileView>
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
