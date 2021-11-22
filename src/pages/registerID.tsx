import type { NextPage } from "next";
import Router from "next/router";

import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";

import * as C from "../styles/pages.Styles";
import { useEffect, useState } from "react";

interface Form {
  matriculation: string;
  password: string;
}

interface NextForm {
  name: string;
  course: string;
  semester: string;
  cpf: string;
  rg: string;
  birthDate: string;
  photo: string;
  curriculum: string;
  linkedin: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [name, setName] = useState(String);
  const [ok, setOk] = useState(false);
  console.log(name);
  const registration: SubmitHandler<Form> = async (data) => {
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
    const result = await res.json();
    if (result.name != undefined) {
      setOk(true);
      setName(result.name);
      reset(result);
    } else if (res.status === 500) {
      console.log("Erro nos dados informados.");
    } else if (res.status === 404) {
      console.log("404 erro");
      //Router.push({pathname: '/myID', query: { nome: posp }});
      //Router.push("/myID");
    }

    //Chamada postar no banco de dados #ParaFazer
    //  postDB(result)
  };
  const onRegister: SubmitHandler<NextForm> = async (data) => {
    console.log(data);
  };
  useEffect(() => {}, [ok]); //colocar loading e redirect
  if (ok) {
    return (
      <C.Container>
        <Head>
          <title>Cadastrar | Carteirinha Estudantil | UNEB</title>
        </Head>
        <C.TextCard>
          <p>
            SEJA BEM VINDO(A) {name.toUpperCase()} SUA CONTA ESTARÁ ATIVA APÓS O
            PREENCHIMENTO DAS INFORMAÇÕES;
          </p>
        </C.TextCard>
        <C.NextFormRegister onSubmit={handleSubmit(onRegister)}>
          <div>
            <p>&nbsp;&nbsp;&nbsp;CURSO:</p>
            <C.Input
              required
              {...register("course")}
              type="text"
              id="course"
              name="course"
              resource="14px 90px"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;SEMESTRE:</p>
            <C.Input
              required
              {...register("semester")}
              type="text"
              id="semester"
              name="semester"
              resource="14px 90px"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;CPF:</p>
            <C.Input
              required
              {...register("cpf")}
              type="text"
              id="cpf"
              name="cpf"
              resource="14px 90px"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;RG:</p>
            <C.Input
              required
              {...register("rg")}
              type="text"
              id="rg"
              name="rg"
              resource="14px 90px"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;DATA DE NASCIMENTO:</p>
            <C.Input
              required
              {...register("birthDate")}
              type="text"
              id="birthDate"
              name="birthDate"
              resource="14px 90px"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;FOTO:</p>
            <C.Input
              {...register("photo")}
              type="text"
              id="photo"
              name="photo"
              resource="14px 90px"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;C.LATTES:</p>
            <C.Input
              {...register("curriculum")}
              type="text"
              id="curriculum"
              name="curriculum"
              resource="14px 90px"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;LINKEDIN:</p>
            <C.Input
              {...register("linkedin")}
              type="text"
              id="linkedin"
              name="linkedin"
              resource="14px 90px"
            />
          </div>
          <div>
            <C.Button type="submit" color="primary">
              SALVAR
            </C.Button>
            <C.Button
              color="secondary"
              type="button"
              onClick={() => {
                setOk(false)
                setName('');
                reset({});
              }}
            >
              Voltar
            </C.Button>
          </div>
        </C.NextFormRegister>
      </C.Container>
    );
  }
  return (
    <C.Container>
      <Head>
        <title>Cadastrar | Carteirinha Estudantil | UNEB</title>
      </Head>
      <C.TextCard>
        <p>Informações que vem aqui</p>
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
