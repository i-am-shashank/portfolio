import styled from "styled-components";

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  display: flex;
  .image {
    height: 32rem;
  }
  @media (max-width: 1000px) {
    .image {
      display: none;
    }
  }
  .imgmob {
    height: 16rem;
    width: 16rem;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 10rem;
    align-self: flex-start;
  }

  @media (min-width: 1000px) {
    .imgmob {
      display: none;
    }
  }
  background: linear-gradient(
      0deg,
      rgba(87, 90, 137, 0.78) 0%,
      rgba(194, 195, 212, 0.28403) 35.67%,
      rgba(255, 255, 255, 0) 100%
    ),
    #fdfdfd;
`;

export default Home;
