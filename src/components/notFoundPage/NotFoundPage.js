import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


const NotFoundPage = ({ location }) => {
  return (
    <h3>
      No match for {location.pathname}
    </h3>
  );
}
export default NotFoundPage;