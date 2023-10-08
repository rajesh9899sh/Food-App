import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center justify-content-center w-100">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          />
          <span className="mb-3 mb-md-0 text-muted">
            © 2022 GoFood- All Rights Reserved | Design by Rajesh Sharma
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
