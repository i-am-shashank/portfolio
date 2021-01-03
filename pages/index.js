import TextBlockHome from "./components/TextBlockHome";
import NextHead from "./components/Head";
import HomeStyled from "./components/styled/HomeStyled";

export default function Home() {
  return (
    <HomeStyled>
      <NextHead />
      <TextBlockHome />
      <img src="assets/img.svg" className="image" />
    </HomeStyled>
  );
}
