import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <div className="filter">
        <div className="titlee1">
          {" "}
          <h1>Movie App</h1>{" "}
        </div>

        <div className="nav2">
          <Link to="/">
            <button class="fun" id="goback">
              Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
