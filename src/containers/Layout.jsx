import React from "react";

const Layout = ({Children}) => {
    return(
        <div className="layout">
            {Children}
        </div>
    );
}

export default Layout;