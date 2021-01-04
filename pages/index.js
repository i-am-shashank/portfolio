import TextBlockHome from "./components/TextBlockHome";
import NextHead from "./components/Head";
import HomeStyled from "./components/styled/HomeStyled";

function Home() {
  return (
    <HomeStyled>
      <NextHead />
      <TextBlockHome />
      <img src="assets/img.svg" className="image" />
      {/* <img src="assets/profile.jpeg" className="imgmob" /> */}
    </HomeStyled>
  );
}

export default Home;
