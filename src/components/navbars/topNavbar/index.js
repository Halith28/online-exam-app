/**
 * @author Abdul halith
 * @email abd.halith994@gmail.com
 * @desc Top Navigation bar parent
 */

import React from "react";
import { TopNavBar } from "./topNavbar";

class TopNavbarParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TopNavBar />;
  }
}

export default TopNavbarParent;
