import type { NextPage } from "next";
import moment from "moment";
import "moment/locale/pt-br";
import { v4 as uuidv4 } from "uuid";

import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";

import * as C from "../styles/pages.Styles";
import { useState } from "react";
import Alert from "../components/Alert";
import LoadingScreen from "../components/LoadingScreen";

interface Form {
  matriculation: string;
  password: string;
}

interface NextForm {
  idStudent: string;
  codeStudent: string;
  name: string;
  course: string;
  semester: string;
  cpf: string;
  rg: string;
  sex: string;
  birthDate: string;
  photo: string;
  curriculum: string;
  linkedin: string;
  password: string;
  dateRegister: moment.Moment;
  dateRevalidate: moment.Moment;
}

moment.locale("pt-br");

const Register: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [name, setName] = useState(String);
  const [ok, setOk] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(String);
  const [loading, setLoading] = useState(false);

  const openAlert = (Message: string) => {
    setShowAlert((prev) => !prev);
    setAlertMessage(Message);
  };

  const registration: SubmitHandler<Form> = async (data) => {
    //Chamada a API para checar se a matricula está ok
    setLoading(true);
    const res = await fetch("https://carteirinhauneb.vercel.app/api/authStudent", {
      body: JSON.stringify({
        matriculation: data.matriculation,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json, text/plain, */*",
        "Access-Control-Allow-Origin":"*",
        'User-Agent': '*'
      },
      method: "POST",
    });
    const result = await res.json();
    if (result.name != undefined) {
      setLoading(false);
      setOk(true);
      setName(result.name);
      reset(result);
     
    } else if (res.status === 500) {
      setLoading(false);
      openAlert("Erro nos dados informados");
    } else if (res.status === 404 || res.status === 400) {
      setLoading(false);
      openAlert("Erro no servidor!");
    }
  };

  const onRegister: SubmitHandler<NextForm> = async (data) => {
    reset(data);
    data.codeStudent = uuidv4();
    data.dateRegister = moment();
    data.dateRevalidate = moment().add(170, "days");

    const res = await fetch("/api/registerStudent", {
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };
  if (loading) {
    return (
      <C.Container>
        <LoadingScreen/>
      </C.Container>
    );
  }

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
        <C.GridFormRegister onSubmit={handleSubmit(onRegister)}>
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
            <p>&nbsp;&nbsp;&nbsp;SEXO:</p>
            <C.Input
              {...register("sex")}
              type="text"
              id="sex"
              name="sex"
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
            <p>&nbsp;&nbsp;&nbsp;FOTO:</p>
            <C.Input
              {...register("photo")}
              type="text"
              id="photo"
              name="photo"
              resource="14px 90px"
              placeholder="Insira o link da foto"
            />
          </div>

          <div>
            <p>&nbsp;&nbsp;&nbsp;SENHA:</p>
            <C.Input
              required
              {...register("password")}
              type="password"
              id="password"
              name="password"
              resource="14px 90px"
            />
          </div>

          <C.Button type="submit" color="primary">
            CADASTRAR
          </C.Button>

          <C.Button
            color="secondary"
            type="button"
            onClick={() => {
              setOk(false);
              setName("");
            }}
          >
            CANCELAR
          </C.Button>
        </C.GridFormRegister>
      </C.Container>
    );
  }
  return (
    <C.Container>
      <Alert
        showAlert={showAlert}
        text={alertMessage}
        type="error"
        setShowAlert={setShowAlert}
      />
      <Head>
        <title>Cadastrar | Carteirinha Estudantil | UNEB</title>
      </Head>
      <C.TextCard>
        <p>
          OLÁ ESTUDANTE, INFORME SUA MATRÍCULA E SENHA DO SAGRES PARA VALIDAR
          SEUS DADOS E PROSSEGUIRMOS COM O CADASTRO!
        </p>
      </C.TextCard>

      <C.FormRegister onSubmit={handleSubmit(registration)}>
        <h2 className="txt">INSIRA OS DADOS DE ACESSO AO SAGRES</h2>
        <div>
          <p>&nbsp;&nbsp;&nbsp;MATRÍCULA:</p>
          <C.Input
            {...register("matriculation")}
            placeholder="Sua Matrícula"
            type="text"
            name="matriculation"
            required
          />
        </div>
        <div>
          <p>&nbsp;&nbsp;&nbsp;SENHA:</p>
          <C.Input
            {...register("password")}
            placeholder="Os 6 primeiros dígitos do CPF"
            type="password"
            name="password"
            required
          />
        </div>
        <C.Button color="primary" type="submit">
          VALIDAR
        </C.Button>
      </C.FormRegister>
    </C.Container>
  );
};

export default Register;
