/**
 * @author Abdul halith
 * @email abd.halith994@gmail.com
 * @desc Providing the AuthContext from /src/context which is used in the /src/App.js.
 */

import React from "react";
import { LinearProgress } from "@material-ui/core";
import { NetworkCall } from "./networkcall";
import { LocalStorageKeys, NetWorkCallMethods } from "./utils";

class AppAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    NetworkCall(
      `${window.location.protocol}//${window.location.hostname}${
        window.location.port ? ":" + window.location.port : ""
      }/meta.json`,
      NetWorkCallMethods.get,
      null,
      null,
      false,
      true
    )
      .then((_) => {
        localStorage.setItem(LocalStorageKeys.version, _.data.version);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }

  render() {
    let { loading } = this.props;

    return (
      <>
        {loading && <LinearProgress />}
        {this.props.children}
      </>
    );
  }
}

export default AppAuth;
