import React from "react";
import { withRouter } from "react-router-dom";

export default withRouter(props => {
  const {
    history,
    location: { pathname }
  } = props;

  /* example of closure arrow function 
  a function (assigned to navigate, takes 'path' as param)
  returns a new function (anonymous, takes 'e' as param)
  */
  const navigate = path => e => {
    e.preventDefault(); // don't navigate to # href in URL
    history.push(path);
  };

  // classic function
  function isActive(path) {
    let className = "";
    if (path == pathname) {
      className = "active";
    }
    return className;
  }

  return (
    <div className="navbar with-indicator">
      <a href="#" className={isActive("/")} onClick={navigate("/")}>
        Home
      </a>

      <a href="#" className={isActive("/about")} onClick={navigate("/about")}>
        About
      </a>

      <a href="#" className={isActive("/other")} onClick={navigate("/other")}>
        Other
      </a>
    </div>
  );
});
