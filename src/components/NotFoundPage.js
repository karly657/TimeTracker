import React from "react"

const NotFoundPage = ({ location }) => {
  return (
    <div>
      <h3>No match for {location.pathname}</h3>
    </div>
  );
}

export default NotFoundPage;