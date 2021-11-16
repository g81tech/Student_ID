import type { NextPage } from 'next'
import Head from 'next/head'

import * as C from '../styles/pages.Styles'

const Search: NextPage = () => {
    return(
        <C.Container>
        <Head>
            <title>Pesquisar | Carteirinha Estudantil | UNEB</title>
        </Head>
        
        <h1>Pesquisar Carteirinha</h1>
        </C.Container>
    )
}

export default Search