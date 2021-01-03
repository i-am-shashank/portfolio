import TextBlockHome from "./components/TextBlockHome";
import NextHead from "./components/Head";
import HomeStyled from "./components/styled/HomeStyled";
import React from 'react'

function Home() {
  return (
    <HomeStyled>
      <NextHead />
      <TextBlockHome />
      <img src="assets/img.svg" className="image" />
    </HomeStyled>
  );
}

export default Home;
