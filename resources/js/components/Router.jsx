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
import Enquiries from "./Admin/Enquiries/Enquiries.jsx";
import EnquiryView from "./Admin/Enquiries/EnquiryView.jsx";
import FadeInDiv from "../elements/FadeInDiv.jsx";
import Enquiry from "./Admin/Enquiries/Enquiry.jsx";
import Login from "./Auth/Login/Login.jsx";
import AuthOutlet from "./Auth/AuthOutlet.jsx";
import Register from "./Auth/Register/Register.jsx";
import Users from "./Admin/Users/Users.jsx";

const Router = () => {

    return (
        <AnimatePresence mode="wait">
            <Routes>
                {/*Dash*/}
                <Route exact path={'/'} element={<>
                    <Header/>
                    <Hero/>
                </>}/>

                {/*Login*/}
                <Route path={'/auth'} element={<AuthOutlet/>}>
                    <Route path={'/auth/login'} element={<Login/>}/>
                    <Route path={'/auth/register'} element={<Register/>}/>
                </Route>

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
                    {/*Admin*/}

                    <Route path={"/admin/enquiries"} element={<Enquiries/>}/>
                    <Route path={"/admin/enquiries/:id"} element={<EnquiryView/>}/>
                    <Route path={"/admin/users"} element={<Users/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Router
