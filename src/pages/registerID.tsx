import type { NextPage } from 'next'
import Router from "next/router";

import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'

import * as C from '../styles/pages.Styles'

interface Form {
  matriculation: string
  password: string
}

export const registration: SubmitHandler<Form> = async (data) =>
{
  //Chamada a API para checar se a matricula está ok 
  const res = await fetch('/api/authStudent', {
    body: JSON.stringify({
      matriculation: data.matriculation,
      password: data.password
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  //resposta com apenas o nome do(a) aluno(a) se houver.
  const result = await res.json()
  const posp = 'fpo'

  //Chamada de função se houver resposta com o nome #ParaFazer
  if (result.nome != undefined){
    console.log("Chamada para preencher o formulário")
  }
  else if (result.statusCode === 500)
  {
    console.log("Erro nos dados informados.")
  }
  else if (result.statusCode === 404)
  {
    console.log("404 erro")
    //Router.push({pathname: '/myID', query: { nome: posp }});
    Router.push('/myID')
  }
  
  
  //Chamada postar no banco de dados #ParaFazer
//  postDB(result)
}

const Register: NextPage = () => {
    const { register, handleSubmit } = useForm();
    
    
    return(
        <C.Container>
        <Head>
            <title>Cadastrar | Carteirinha Estudantil | UNEB</title>
        </Head>
        
        <h1>Cadastrar</h1>
        <form onSubmit={handleSubmit(registration)}>
          <C.Input
            {...register('matriculation')}
            placeholder='Matrícula'
            type='text'
            name='matriculation'
            required
        />
        <C.Input
            {...register('password')}
            placeholder='Senha'
            type='password'
            name='password'
            required
        />
          <C.Button  type='submit'>Validar</C.Button>
      </form>

    </C.Container>
  )
}

export default Register