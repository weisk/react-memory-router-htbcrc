import React from "react";
import { withRouter } from "react-router-dom";

export default withRouter(props => (
  <div>
    <h1>About</h1>
    <button onClick={() => props.history.push("/other")}>Go to Other</button>
  </div>
));
