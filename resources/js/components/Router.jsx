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
import Hero from "./Hero.jsx";
import Enquire from "./Enquire/Enquire.jsx";
import AdminOutlet from "./Admin/AdminOutlet.jsx";
import Enquiries from "./Admin/Enquiries.jsx";
import EnquiryView from "./Admin/EnquiryView.jsx";
import FadeInDiv from "../elements/FadeInDiv.jsx";
import Enquiry from "./Admin/Enquiry.jsx";

const Router = () => {

    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route exact path={'/'} element={<>
                    <Header/>
                    <Hero/>
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
                    <Route path={'/enquire'} element={<Enquire/>}/>
                </Route>

                <Route path={"/admin"} element={<AdminOutlet/>}>
                    <Route path={"/admin/enquiries"} element={<Enquiries/>}/>
                    <Route path={"/admin/enquiries/test"} element={<EnquiryView/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Router
