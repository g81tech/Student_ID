import type { NextPage } from 'next'
import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'
import {postDB} from '../lib/postDB'
import { Button, Input } from '../styles/components.Styles'

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

const Register: NextPage = () => {
    const { register, handleSubmit } = useForm();
    return(
        <C.Container>
        <Head>
            <title>Cadastrar | Carteirinha Estudantil | UNEB</title>
        </Head>
        
        <h1>Cadastrar</h1>
        <form onSubmit={handleSubmit(registration)}>
          <Input
            {...register('matriculation')}
            placeholder='Matrícula'
            type='text'
            name='matriculation'
            required
        />
        <Input
            {...register('password')}
            placeholder='Senha'
            type='password'
            name='password'
            required
        />
          <Button  type='submit'>Validar</Button>
      </form>

    </C.Container>
  )
}

export default Register