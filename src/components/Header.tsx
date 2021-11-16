import NextLink from 'next/link'

import LogoStudentID from '../assets/CE.svg'

import * as C from '../styles/components.Styles'

export function Header() {
    return (
      <C.Nav>
        <img src="/uneb.png" />
        <LogoStudentID class="CE" />

        <C.Menu>
            <ul>
                <li>
                    <NextLink href={'/'}>Início</NextLink>
                </li>
                <li>
                    <NextLink href="/searchID">Pesquisar Carteirinha</NextLink>
                </li>
                <li>
                    <NextLink href="/registerID">Cadastrar</NextLink>
                </li>
                <li>
                    <a style={{cursor: 'not-allowed'}}>Alterar Dados</a>
                </li>
                <li>
                    <NextLink href="/revalidateID">Revalidar</NextLink>
                </li>
                <li>
                    <NextLink href="/about">Sobre</NextLink>
                </li>
            </ul>
        </C.Menu>
      </C.Nav>
    )
}
