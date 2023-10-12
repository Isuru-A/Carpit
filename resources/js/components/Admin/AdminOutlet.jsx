import FadeInDiv from "../../elements/FadeInDiv.jsx";
import {Outlet} from "react-router-dom";
import AdminNavigation from "./AdminNavigation.jsx";

const AdminOutlet = () => {

    return (
        <FadeInDiv id="admin-outlet">
            <h1>Admin</h1>
            <AdminNavigation/>
            <Outlet/>
        </FadeInDiv>
    )
}

export default AdminOutlet
