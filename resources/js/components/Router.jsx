import {AnimatePresence} from "framer-motion";
import {Route, Routes} from "react-router-dom";
import Header from "./Header.jsx";
import Servicing from "./Services/Servicing.jsx";
import Services from "./Services/Services.jsx";
import ContentOutlet from "./ContentOutlet.jsx";
import About from "./About/About.jsx";
import Transmission from "./Services/Transmission.jsx";
import Cleaning from "./Services/Cleaning.jsx";
import Detailing from "./Services/Detailing.jsx";
import Tuning from "./Services/Tuning.jsx";

const Router = () => {

    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route exact path={'/'} element={<>
                    <Header/>
                </>}/>
                <Route path={'/'} element={<ContentOutlet/>}>
                    {/*Services*/}
                    <Route exact path={'/services'} element={<Services/>}/>
                    <Route path={'/services/servicing'} element={<Servicing/>}/>
                    <Route path={'/services/transmission'} element={<Transmission/>}/>
                    <Route path={'/services/cleaning'} element={<Cleaning/>}/>
                    <Route path={'/services/detailing'} element={<Detailing/>}/>
                    <Route path={'/services/tuning'} element={<Tuning/>}/>

                    <Route path={'/about'} element={<About/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Router
