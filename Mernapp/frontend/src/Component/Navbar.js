import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "../Modal";
import Cart from "../pages/Cart";

const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  const Data = JSON.parse(localStorage.getItem("CartData")) || [];
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {auth ? (
              <ul className="navbar-nav w-100 ">
                <li className="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/myOrder">
                    MyOrder
                  </Link>
                </li>
                <div className="d-flex justify-content-end w-100">
                  <div
                    className="btn bg-white text-success nav-link mx-2"
                    onClick={() => {
                      setCartView(true);
                    }}
                  >
                    <Badge color="secondary" badgeContent={Data.length}>
                      <ShoppingCartIcon />
                    </Badge>
                    Cart
                  </div>
                  {cartView ? (
                    <Modal onClose={() => setCartView(false)}>
                      <Cart />
                    </Modal>
                  ) : null}
                  <Link
                    className="btn bg-white text-danger nav-link mx-2"
                    to="/signup"
                    onClick={logout}
                  >
                    Logout ({JSON.parse(auth).name})
                  </Link>
                </div>
              </ul>
            ) : (
              <div style={{ width: "100%" }}>
                <div className="d-flex justify-content-end">
                  <Link className="btn bg-white mx-1 nav-link" to="/login">
                    Login
                  </Link>
                  <Link className="btn bg-white mx-1 nav-link" to="/signup">
                    Signup
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
