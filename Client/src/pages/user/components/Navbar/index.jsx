
import React from 'react'
import { Link } from 'react-router-dom';
// import { cowork01 } from "@image";

export function Navbar() {
  return (
    <>
      {/* <h1>navbar</h1> */}
      <header className="header shadow-sm">
        <div className="container">
          <nav className="navbar header-nav" style={{ width: "100%" }}>
            <div className="navbar-header">
              <a id="mobile_btn" href="#;">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link to="/home" className="navbar-brand logo ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCzX0J4Tq-8O0xTbsr9HbF_SOqv0BoArjIw&s"
                  className="img-fluid mt-[15px] ml-[32px] h-[52px]"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCzX0J4Tq-8O0xTbsr9HbF_SOqv0BoArjIw&s" 
                  className="img-fluid h-[52px]" alt="Logo" />
                </Link>
                <Link id="menu_close" className="menu-close" to="#">
                  <i className="fas fa-times"></i>
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu active">
                  <Link to="#">
                    Home <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/new-ev">New EV</Link>
                    </li>
                    <li>
                      <Link to="/world-ev">World EV</Link>
                    </li>
                    <li>
                      <Link to="/used-ev">Used EV</Link>
                    </li>
                    <li>
                      <Link to="/sell-ev">Sell EV</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    EV Services <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/retrofitter">Retrofitter</Link>
                    </li>
                    <li>
                      <Link to="/ev-mechanic">EV Mechanic</Link>
                    </li>
                    <li>
                      <Link to="/ev-software-apps">EV Software & Apps</Link>
                    </li>
                    <li>
                      <Link to="/loan-insurance">Loan & Insurance</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/charging-point">Charging Point</Link>
                </li>
               
                <li className="has-submenu">
                  <Link to="/ev-training">EV Training</Link>
                </li>
                <li className="has-submenu">
                  <Link to="/ev-jobs">EV Jobs</Link>
                </li>
                <li className="has-submenu">
                  <Link to="/ev-startups">EV Startups</Link>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    News & Reviews <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/youtube-review">Youtube Review</Link>
                    </li>
                    <li>
                      <Link to="/customer-complaints">Customer Complaints</Link>
                    </li>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                    <li>
                      <Link to="/user-reviews">User Reviews</Link>
                    </li>
                    <li>
                      <Link to="/videos">Videos</Link>
                    </li>
                
                  </ul>
                </li>
                {/* <li className="has-submenu">
                  <Link to="/">Loign</Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

