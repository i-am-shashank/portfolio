import styled from "styled-components";

const NavStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 4rem;
  background: #575a89;
  border-radius: 0 0 0 64px;


  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #e6e6e6;
  .home {
    display: flex;
    margin-left: 5rem;
    user-select: none;
  }
  .container {
    display: flex;
    margin-left: 50rem;
    justify-content: space-around;
    width: 100%;
    user-select: none;

    @media (max-width: 1100px) {
      margin-left: 20rem;
    }

  }
  .position {
    /* position: relative; */
    /* margin-top: 1.4rem;  */
    align-self: center;
  }
  .entity {
    :hover {
      color: white;
      cursor: pointer;
    }
  }
  .BiMenu {
    visibility: hidden;

    position: absolute;
    align-self: center;
    right: 1rem;
  }
`;

export default NavStyled;
