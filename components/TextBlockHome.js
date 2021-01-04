import React from "react";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  TextContainer,
  MediaContainer,
  Button,
} from "./styled/TextBlockStyled";

const downloadCV = () => {
  console.log("download handler");
};
const knowMore = () => {
  console.log("know more handler");
};

function TextBlockHome() {
  return (
    <>
      <TextContainer>
        <p className="text helloIam">👋🏼Hello, I am</p>
        <br />
        <p className="text name">Shashank</p>
        <br />
        <p className="text name">Mishra</p>
        <br />
        <div className="lowerText">
          <p className="text">frontend web enthusiast | </p>
          <p className="textDesigner">&nbsp;Designer</p>
        </div>
        <p className="text textLast">
          dedicated to minimilistic and simple UX / UI
        </p>
        <div className="buttonContainer">
          <a href="/assets/Resume.pdf" download>
          <Button primary>
            download CV
          </Button>
          </a>
          <Button onClick={knowMore} secondary>
            know more
          </Button>
        </div>
        <MediaContainer>
          <div className="social">
            <p>find me on :</p>
            <div className="icons">
              <Link href="https://www.instagram.com/code_garnish/">
                <FaInstagram className="iconHover" />
              </Link>
              <Link href="https://github.com/this-is-shashank-mishra/">
                <FaGithub className="iconHover" />
              </Link>
              <Link href="https://www.linkedin.com/in/shashank-mishra-b150871bb/">
                <FaLinkedinIn className="iconHover" />
              </Link>
            </div>
          </div>
        </MediaContainer>
      </TextContainer>
    </>
  );
}

export default TextBlockHome;
