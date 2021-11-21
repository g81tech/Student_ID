/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link'
import LogoStudentID from '../assets/CE.svg'

import * as C from '../styles/components.Styles'

export default function Header() {
    return (
      <C.Nav>
        <img src="/uneb.png" />
        <LogoStudentID className="CE" />

        <C.Menu>
            <ul>
                <li>
                    <NextLink href={'/'}>INÍCIO</NextLink>
                </li>
                <li>
                    <NextLink href="/searchID">PESQUISAR CARTEIRINHA</NextLink>
                </li>
                <li>
                    <NextLink href="/registerID">CADASTRAR</NextLink>
                </li>
                <li>
                    <NextLink href="/myID">MINHA CARTEIRINHA</NextLink>
                </li>
                <li>
                    <NextLink href="/revalidateID">REVALIDAR</NextLink>
                </li>
                <li>
                    <NextLink href="/about">SOBRE</NextLink>
                </li>
            </ul>
        </C.Menu>
      </C.Nav>
    )
}
