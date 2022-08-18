import React, { useContext } from "react";
import UserNavbar from "./nav/UserNavbar";
import Image from "react-bootstrap/Image";
import Footer from "./nav/Footer";

const Layout = ({ src, alt = "", children }) => {
  return (
    <>
      <UserNavbar />
      {src && <Image className="hero" rounded src={src} alt={alt} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
