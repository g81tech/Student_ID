import type { NextPage } from 'next'
import Head from 'next/head'

import * as C from '../styles/pages.Styles'

const About: NextPage = () => {
    return(
        <C.Container>
        <Head>
            <title>Sobre | Carteirinha Estudantil | UNEB</title>
        </Head>
        
        <h1>Sobre</h1>
        </C.Container>
    )
}

export default About