import React from "react";
import NavStyled from "./styled/NavStyled";
import { BiMenu, BiHome } from "react-icons/bi";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <NavStyled>
        <div className="home position entity">
          <BiHome />
          Home
        </div>
        <div className="container position">
          <Link href="/assets/Resume.pdf">
            <p className="about entity">About</p>
          </Link>
          <p className="work entity">Work</p>
          <p className="testimonial entity">Testimonial</p>
        </div>
        <BiMenu className="BiMenu" size="1.8rem" />
      </NavStyled>
    </>
  );
}

export default NavBar;
