import type { NextPage } from 'next'
import { useRouter } from "next/router";

import Head from 'next/head'

import * as C from '../styles/pages.Styles'


const myID: NextPage = () => {
    const { query } = useRouter();
    
    console.log("na query" + query.nome)
    return(
        <C.Container>
        <Head>
            <title>Carteirinha Estudantil | UNEB</title>
        </Head>
        
        <h1>Minha carteirinha </h1>
        </C.Container>
    )
}

export default myID