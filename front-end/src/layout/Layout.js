import React from "react";
import Routes from "./Routes";
import Menu from "./Menu";
import Header from "./Header";
import TableTypeAvailability from "./TableTypeAvailability";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="bg-light">
      <Header />
      <div className="row">
        <div className="bg-light col-md-2">
          <Menu />
        </div>
        <div className="col main">
          <div className="bg-warning text-white">
            <Routes />
          </div>
          <TableTypeAvailability />
        </div>
      </div>
    </div>
  );
}

export default Layout;
