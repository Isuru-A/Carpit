import NavLink from "../../elements/NavLink.jsx";

const AdminNavigation = () => {

    return (
        <nav className="navigation">
            <NavLink inverted to={"/admin/blog"}>Blog</NavLink>
            <NavLink inverted to={"/admin/enquiries"}>Enquiries</NavLink>
            <NavLink inverted to={"/admin/users"}>Users</NavLink>
            <NavLink inverted to={"/admin/settings"}>Settings</NavLink>
        </nav>
    )
}

export default AdminNavigation
