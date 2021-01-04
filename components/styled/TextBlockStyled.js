import styled from "styled-components";

const TextContainer = styled.div`
  /* margin: 10rem 0 0 8rem; */
  display: flex;
  flex-direction: column;
  text-shadow: 2px 2px 8px rgba(63, 61, 86, 0.25);
  .text {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #3f3d56;
    width: max-content;
  }
  .textDesigner {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #575a89;
    width: max-content;
  }
  .lowerText {
    display: flex;
    font-size: 2rem;
  }
  .helloIam {
    font-size: 2rem;
    font-weight: bold;
  }
  .name {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    font-size: 6rem;
    line-height: 5.8rem;
  }
  .textLast {
    font-size: 1.2rem;
    font-weight: normal;
    text-shadow: 0px 0px 4px rgba(87, 90, 137, 0.25);
  }
  .buttonContainer {
    margin-top: 5rem;
    display: flex;
    width: 64%;
    top: 0;
    right: 0;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    border: none;
  }
  @media (max-width: 1200px) {
    .helloIam {
      font-size: 1.5rem;
    }
    .name {
      font-size: 4rem;
      line-height: 5.8rem;
    }
    .lowerText {
      font-size: 1.5rem;
    }
    .textLast {
      font-size: 1rem;
    }
  }
`;
const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 4rem;
  .social {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.8rem;
    text-shadow: none;
    color: #3f3d56;
  }
  .icons {
    margin-top: 2rem;
    display: flex;
    width: 40%;
    justify-content: space-between;
    cursor: pointer;
  }
  .iconHover:hover {
    color: #575a89;
  }
  @media (max-width: 1200px) {
    .social {
      font-size: 1.5rem;
    }
  }
`;
const Button = styled.button`
  display: flex;
  /* justify-content: center; */
  padding: 0.6rem;
  width: auto;
  height: 48px;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.primary ? "#575a89" : "transparent")};
  opacity: ${(props) => props.primary && 0.8};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: ${(props) => props.secondary && "2px solid #E6E6E6"};
  border-radius: 2px 2px 2px 8px;

  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.2rem;
  line-height: 28px;
  text-shadow: ${(props) =>
    props.secondary && "0px 0px 3px rgba(0, 0, 0, 0.25)"};
  color: ${(props) => (props.primary ? "#e6e6e6" : "#575A89")};
  @media (max-width: 1200px) {
    height: 32px;
    padding: 0rem 0.5rem;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1rem;
  }
`;

export { TextContainer, MediaContainer, Button };
