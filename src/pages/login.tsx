import type { NextPage } from 'next'
import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'
import {postDB} from '../lib/postDB'

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

  //Chamada de função se houver resposta com o nome #ParaFazer
  console.log(result)

  //Modal de erro: 501- Falha na conexão, tente depois ou entre em contato // 500- login não realizado. #ParaFazer
  console.log(result)
  
  //Chamada postar no banco de dados #ParaFazer
  postDB(result)
}

const Login: NextPage = () => {
    const { register, handleSubmit } = useForm();
  return (
    <C.Container>
      <Head>
        <title>Login | Carteirinha Estudantil | UNEB</title>
      </Head>
      
      <h1>Página de login</h1>
      <form onSubmit={handleSubmit(registration)}>
          <input
            {...register('matriculation')}
            placeholder='Matrícula'
            type='number'
            name='matriculation'
            required
        />
        <input
            {...register('password')}
            placeholder='Senha'
            type='password'
            name='password'
            required
        />
          <button type='submit'>Validar</button>
      </form>

    </C.Container>
  )
}
export default Login
