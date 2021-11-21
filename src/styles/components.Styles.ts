import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;

  .CE {
    width: 15rem;
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
`

export const Menu = styled.div`
  width: 80vw;
  max-width: 90rem;
  padding: 1.5rem;
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
    font-size: 1.3rem;
    list-style: none;
    text-decoration: none;
    display: flex;
    color: ${(props) => props.theme.colors.text.secondary};
  }
  a:hover {
    color: ${(props) => props.theme.colors.tertiary};
    transition-duration: 0.7s;
  }
  a:active,
  a:focus {
    color: ${(props) => props.theme.colors.indicator};
  }

  .disable a:hover {
    cursor: "not-allowed";
  }
`
export const Button = styled.button`
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.colors.primary
      : props.color === "secondary"
      ? props.theme.colors.secondary
      : props.theme.colors.inherit};
  color: ${(props) =>
    props.color
      ? props.theme.colors.text.secondary
      : props.theme.colors.text.primary};
  padding: 14px 50px;
  border-radius: 20px;
  border: none;
  :hover,
  :focus {
    background-color: ${(props) =>
      props.color === "primary"
        ? props.theme.colors.indicator
        : props.color === "secondary"
        ? "#733E3E"
        : "#676767"};
    transition-duration: 0.7s;
  }
  text-decoration: none;
  font-size: ${(props) => (props.resource ? props.resource : "20px")};
`

export const Input = styled.input`
  font-size: 20px;
  border: none;
  background-color: ${(props) => props.theme.colors.inherit};

  border-radius: 20px;
  padding: 14px 50px;
`