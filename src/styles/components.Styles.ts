import styled from 'styled-components'

export const Nav = styled.div`
    width: 100%;

    .CE {
        width: 20rem;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto
    }

    img {
        position: absolute;
        width: 150px;
        margin: 5rem 3rem 0 0;
        right: 0;

    }
`

export const Menu = styled.div`
    width: 100vw;
    max-width: 90rem;
    padding: 2rem;
    border-radius: 1.7rem;
    display: flex;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.primary};
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
        color: #f0f0f0;
    }
    a:hover, a:active, a:focus {
        color: ${props => props.theme.colors.secundary};
        transition-duration: 0.7s;
      }

    .disable a:hover{
        cursor: 'not-allowed';
    }
    
`