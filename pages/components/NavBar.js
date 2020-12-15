import React from "react";
import NavStyled from "./styled/NavStyled";
import { BiMenu } from "react-icons/bi";

function NavBar() {
  return (
    <>
      <NavStyled>
        <p className="home position entity">Home</p>
        <div className="container position">
          <p className="about entity">About</p>
          <p className="work entity">Work</p>
          <p className="testimonial entity">Testimonial</p>
        </div>
        <BiMenu className="BiMenu" size="1.8rem"/>
      </NavStyled>
    </>
  );
}

export default NavBar;
