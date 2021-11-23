import styled from "styled-components";
import { MdClose } from "react-icons/md";
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

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  left: 250px;
  justify-content: center;
  align-items: center;
`;
export const CardModal = styled.div`
  width: 400px;
  background-color: #ccc;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.text.secondary}
  );
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: solid 0.2rem ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 0.5rem rgba(50, 50, 50, 0.4);

  display: grid;
  grid-template-areas:
    "image image data data data data"
    "university university university university university university";
  grid-gap: 1rem;
  .image {
    grid-area: image;
  }
  .data {
    grid-area: data;
    width: 13rem;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
  .data p {
    background-color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0.5rem;
    padding: 0.3rem;
    border-radius: 0.7rem;
  }
  .university {
    grid-area: university;
    display: flex;
  }
`;
export const ModalClose = styled(MdClose)`
  cursor: pointer;
  position:relative;
  top: -250px;
  right: -340px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const AlertCard = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 720px;
  min-height: 5rem;

  background-color: ${(props) =>
    props.color === "error"
      ? props.theme.colors.secondary
      : props.color === "success"
      ? props.theme.colors.primary
      : props.theme.colors.inherit};
  border-radius: 1.5rem;
  padding: 1rem;
  p {
    font-size: 20px;
    margin: 0 auto;
    color: ${(props) =>
      props.color
        ? props.theme.colors.text.secondary
        : props.theme.colors.text.primary};
  }
  align-items: center;
  position: relative;
  z-index: 2;
`;
