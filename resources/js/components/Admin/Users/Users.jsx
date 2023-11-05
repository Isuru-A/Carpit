import {Formik} from "formik";
import Enquiry from "../Enquiries/Enquiry.jsx";
import FadeInDiv from "../../../elements/FadeInDiv.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import User from "./User.jsx";

const Users = () => {

    const [view, setView] = useState('active')
    const [users, setUsers] = useState([])
    const [filtered, setFiltered] = useState([])
    const navigate = useNavigate()

    return (
        <FadeInDiv className="list-wrapper">
            <div id="admin-users">
                <h1>Users</h1>
                <Formik initialValues={{
                    view: view
                }} onSubmit={() => {
                    //
                }}>
                    <select name="view" className="item-filter">
                        <option onClick={() => {
                            setFiltered(users.filter(enquiry => enquiry.active && !enquiry.admin))
                            setView('active')
                        }}>Active
                        </option>
                        <option onClick={() => {
                            setFiltered(users.filter(enquiry => enquiry.active && enquiry.admin))
                            setView('admin')
                        }}>Admin
                        </option>
                        <option onClick={() => {
                            setFiltered(users.filter(enquiry => !enquiry.active))
                            setView('inactive')
                        }}>Inactive
                        </option>

                    </select>
                </Formik>
                <div className="item-list">
                    {(filtered.length === 0) ?
                        (
                            <User userType="Uh Oh!"
                                     name={`No ${view} users`}/>
                        ) : (
                            <>
                                {filtered.map(enquiry => (
                                    <></>
                                ))}
                            </>
                        )
                    }
                </div>
            </div>
        </FadeInDiv>

    )
}

export default Users
