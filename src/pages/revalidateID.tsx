import type { NextPage } from 'next'
import Head from 'next/head'

import * as C from '../styles/pages.Styles'


const Revalidate: NextPage = () => {
    return(
        <C.Container>
        <Head>
            <title>Revalidar | Carteirinha Estudantil | UNEB</title>
        </Head>
        
        <C.FormRegister >
        <h2>REVALIDAÇÃO DA CARTEIRINHA</h2>
        <C.Input
        
          placeholder="Matrícula"
          type="text"
          name="matriculation"
          required
        />
        <C.Input
         
          placeholder="Senha"
          type="password"
          name="password"
          required
        />
        <C.Button color="primary" type="submit">
          Revalidar
        </C.Button>
      </C.FormRegister>
        </C.Container>
    )
}

export default Revalidate