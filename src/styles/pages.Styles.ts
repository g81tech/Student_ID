import styled from 'styled-components'

export const Container = styled.div`
    width: 80vw;
    max-width: 90rem;
    justify-content: center;
    margin: 2rem auto 2rem auto;
`
export const Filter = styled.div`
  display: flex;
  height: 5rem;
  background: ${(props) => props.theme.colors.primary};
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  padding: 1rem;

  ul {
    list-style: none;
    display: flex;
  }
  p {
    margin: auto 0;
    margin-right: 1rem;
  }
  select {
    border-radius: 0.7rem;
    margin-right: 2rem;
    border: none;
    outline:0px;
  }
`

export const ListID = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  .id {
    background-color: #ccc;
    background-image: linear-gradient(${(props) => props.theme.colors.background}, ${(props) => props.theme.colors.text.secondary});
    border-radius: 1.5rem;
    padding: 1.5rem;
    border: solid 0.2rem ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0.5rem rgba(50, 50, 50, 0.40);;

    display: grid;
    grid-template-areas:
    'image image data data data data'
    'university university university university university university';
    grid-gap: 1rem;
  }

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
  .data p{
    background-color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0.5rem;
    padding: 0.3rem;
    border-radius: 0.7rem;
  }
  .university {
    grid-area: university;
    display: flex;
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
  :active,
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
`;

export const Input = styled.input`
  font-size: 20px;
  border: none;
  background-color: ${(props) => props.theme.colors.inherit};

  border-radius: 20px;
  padding: 14px 50px;
`;
