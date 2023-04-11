import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import { setUser } from "../store";
import MainLoader from "./MainLoader";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);
    await signOut(auth)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <MainLoader />
      ) : (
        <div className="navbar w-full fixed top-0 bg-base-100 text-white z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/tour">IERT TOUR</Link>
                </li>
                <li>
                  <Link to="/events">EVENTS</Link>
                </li>
                {/* <li tabIndex={0}>
                  <Link to="/forms" className="justify-between">
                    FORMS
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link to="/contact-us">CONTACT US</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              UDBHAV
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center  lg:gap-5">
              <li>
                <Link to="/tour">IERT TOUR</Link>
              </li>
              <li>
                <Link to="/events">EVENTS</Link>
              </li>

              {/* <li tabIndex={0}>
                <Link to="/forms">
                  UPDATES
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <a>Forms</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
              <li
                className="cursor-pointer"
                onClick={() => navigate("/contact-us")}
              >
                CONTACT US
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {!user ? (
              <button
                className="btn glass"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            ) : (
              <div className="dropdown dropdown-hover">
                <span tabIndex={0} className="btn m-1">
                  Hi&nbsp;{user.displayName}&nbsp;&nbsp;&nbsp;
                  <div className="avatar">
                    <div className="w-9 rounded-full">
                      {user.photoURL && <img src={user.photoURL} />}
                      {!user.photoURL && (
                        <img src="https://ik.imagekit.io/xji6otwwkb/Profile.png?updatedAt=1680849745697" />
                      )}
                    </div>
                  </div>
                </span>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <span onClick={logOut}>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
