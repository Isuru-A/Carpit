import {Outlet} from "react-router-dom";

const ContentOutlet = () => {

    return (
        <div className="content-outlet">
            <Outlet/>
        </div>
    )
}

export default ContentOutlet
