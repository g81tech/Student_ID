import type { NextPage } from "next";
import Router from "next/router";

import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";

import * as C from "../styles/pages.Styles";
import { useState } from "react";

interface Form {
  matriculation: string;
  password: string;
}

export const registration: SubmitHandler<Form> = async (data) => {
  //Chamada a API para checar se a matricula está ok

  const res = await fetch("/api/authStudent", {
    body: JSON.stringify({
      matriculation: data.matriculation,
      password: data.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  //resposta com apenas o nome do(a) aluno(a) se houver.
  const result = await res.json();
  const posp = "fpo";
 console.log(result);
  //Chamada de função se houver resposta com o nome #ParaFazer
  if (result.nome != undefined) {
    return (
      <C.Container>
        <Head>
          <title>Cadastrar | Carteirinha Estudantil | UNEB</title>
        </Head>
        <C.NextFormRegister>
          <div>
            <p>&nbsp;&nbsp;&nbsp;CURSO:</p>
            <C.Input resource="14px 90px" />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;SEMESTRE:</p>
            <C.Input resource="14px 90px" />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;CPF:</p>
            <C.Input resource="14px 90px" />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;RG:</p>
            <C.Input resource="14px 90px" />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;DATA DE NASCIMENTO:</p>
            <C.Input resource="14px 90px" />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;FOTO:</p>
            <C.Input resource="14px 90px" />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;C.LATTES:</p>
            <C.Input resource="14px 90px" />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;LINKEDIN:</p>
            <C.Input resource="14px 90px" />
          </div>
          <div>
            <C.Button color="primary">SALVAR</C.Button>
          </div>
        </C.NextFormRegister>
      </C.Container>
    );
  } else if (result.statusCode === 500) {
    console.log("Erro nos dados informados.");
  } else if (result.statusCode === 404) {
    console.log("404 erro");
    //Router.push({pathname: '/myID', query: { nome: posp }});
    Router.push("/myID");
  }

  //Chamada postar no banco de dados #ParaFazer
  //  postDB(result)
};

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm();

  return (
    <C.Container>
      <Head>
        <title>Cadastrar | Carteirinha Estudantil | UNEB</title>
      </Head>
       <C.TextCard>
        <text>Informações que vem aqui</text>
      </C.TextCard>

      <C.FormRegister onSubmit={handleSubmit(registration)}>
        <h2>INSIRA OS DADOS DE ACESSO AO SAGRES</h2>
        <C.Input
          {...register("matriculation")}
          placeholder="Matrícula"
          type="text"
          name="matriculation"
          required
        />
        <C.Input
          {...register("password")}
          placeholder="Senha"
          type="password"
          name="password"
          required
        />
        <C.Button color="primary" type="submit">
          Validar
        </C.Button>
      </C.FormRegister>
    </C.Container>
  );
};

export default Register;
