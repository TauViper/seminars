import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
        <div className="container-fluid">

            <div className="navbar-nav">
              <span className="nav-item">
                <Link className="nav-link" to="/">
                  Показать семинары
                </Link>
              </span>
            </div>
        </div>
      </nav>
    </div>
  );
}
