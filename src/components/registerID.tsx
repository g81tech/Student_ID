import Head from 'next/head'

import * as C from '../styles/pages.Styles'

type AuthStudent = {
    nome: string
}

export const registerIDonDB = (result:AuthStudent) =>
{
  console.log("no if");
  return(
    <C.Container>
    <Head>
        <title>Sobre | Carteirinha Estudantil | UNEB</title>
    </Head>
    
    <h1>Sobre</h1>
    </C.Container>
  )}