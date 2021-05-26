/**
 * @author Abdul halith
 * @email abd.halith994@gmail.com
 * @desc Side Navigation bar parent
 */

import React from "react";
import { SideNavBar } from "./sideNavbar";

class SideNavbarParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SideNavBar {...this.props} />;
  }
}

export default SideNavbarParent;
