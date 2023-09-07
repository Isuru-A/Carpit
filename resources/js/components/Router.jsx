import {AnimatePresence} from "framer-motion";
import {Route, Routes} from "react-router-dom";
import Header from "./Header.jsx";
import Servicing from "./Services/Servicing.jsx";
import Services from "./Services/Services.jsx";
import ContentOutlet from "./ContentOutlet.jsx";

const Router = () => {

    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route exact path={'/'} element={<>
                    <Header/>
                </>}/>
                <Route path={'/'} element={<ContentOutlet/>}>
                    <Route exact path={'/services'} element={<Services/>}/>
                    <Route path={'/services/servicing'} element={<Servicing/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Router
