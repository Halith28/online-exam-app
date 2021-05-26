/**
 * @author Abdul halith
 * @email abd.halith994@gmail.com
 * @desc withAllContexts HOC will send all the necessary Context such as AlertContext,
 * DialogContext, BackdropContext and DrawerContext as a prop.
 */

import React from "react";
import {
  AlertContext,
  DialogContext,
  BackdropContext,
  DrawerContext,
} from "../contexts";

const withAllContexts = (Component) => (props) => {
  const alert = React.useContext(AlertContext);
  const dialog = React.useContext(DialogContext);
  const backDrop = React.useContext(BackdropContext);
  const drawer = React.useContext(DrawerContext);

  return (
    <Component
      {...props}
      alert={alert}
      dialog={dialog}
      backDrop={backDrop}
      drawer={drawer}
    >
      {props.children}
    </Component>
  );
};

export default withAllContexts;
