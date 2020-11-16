import React from "react";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => (
  <div>
    <h1>Home</h1>
    <button onClick={() => history.push("/about")}>Go to About</button>
  </div>
));
