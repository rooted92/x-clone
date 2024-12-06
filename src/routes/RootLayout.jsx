import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

function RootLayout() {
    return (
        <>
            <MainHeader />
            {/* Where the nested routes will render their content  */}
            <Outlet />
        </>
    )
}

export default RootLayout