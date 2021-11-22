import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;

  .CE {
    width: 13rem;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    position: absolute;
    width: 100px;
    margin: 2rem 3rem 0 0;
    right: 0;
  }
`;

export const Menu = styled.div`
  width: 80vw;
  max-width: 85rem;
  padding: 1.2rem;
  border-radius: 20px;
  display: flex;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;

  li {
    list-style: none;
    display: inline-block;
    text-align: center;
  }

  a {
    cursor: pointer;
    margin-right: 2rem;
    font-size: 1.1rem;
    list-style: none;
    text-decoration: none;
    display: flex;
    color: ${(props) => props.theme.colors.text.secondary};
  }
  a:hover {
    color: ${(props) => props.theme.colors.indicator};
    transition-duration: 0.7s;
  }
  a:active,
  a:focus {
    color: ${(props) => props.theme.colors.tertiary};
  }

  .disable a:hover {
    cursor: "not-allowed";
  }
`;
