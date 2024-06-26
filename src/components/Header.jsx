import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import $ from "jquery";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import Dropdown from "react-bootstrap/Dropdown";
import favimg from "../assets/images/favicon.png";

const Header = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   $("[data-trigger]").on("click", function (e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     var offcanvas_id = $(this).attr("data-trigger");
  //     $(offcanvas_id).toggleClass("show");
  //   });

  //   $(".btn-asidminimizee-").on("click", function () {
  //     if (window.innerWidth < 768) {
  //       $("body").removeClass("aside-mini");
  //       $(".navbar-aside").removeClass("show");
  //     } else {
  //       // minimize sidebar on desktop
  //       $("body").toggleClass("aside-mini");
  //     }
  //   });
  // }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="main-header navbar">
      <div className="col-search">
        <form className="searchform">
          <div className="input-group">
            <input
              list="search_terms"
              type="text"
              className="form-control"
              placeholder="Search term"
            />
            <button className="btn btn-light bg" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <datalist id="search_terms">
            <option value="Products" />
            <option value="New orders" />
            <option value="Apple iphone" />
            <option value="Priya" />
          </datalist>
        </form>
      </div>
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 fas fa-bars"></i>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link className={`nav-link btn-icon`} title="Dark mode" to="#">
              <i className="fas fa-moon"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-icon" to="#">
              <i className="fas fa-bell"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              English
            </Link>
          </li>
          {/* <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              <img
                className="img-xs rounded-circle"
                src="\src\assets\images\favicon.png"
                alt="User"
              />
            </Link> */}
          <div className="btn-group">
            <Dropdown>
              <Dropdown.Toggle className="dropdown-basic">
                {/* <i className="fas fa-user"></i> */}
                <img
                  className="img-xs rounded-circle"
                  src={favimg}
                  alt="User"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item href="/login">Login</Dropdown.Item> */}
                <Dropdown.Item href="/register">Register</Dropdown.Item>
                <Dropdown.Item href="/" onClick={logoutHandler}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/">
                My profile
              </Link>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
              <Link
                onClick={logoutHandler}
                className="dropdown-item text-danger"
                to="#"
              >
                Exit
              </Link>
            </div> */}
          {/* </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
