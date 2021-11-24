import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Alert from "../components/Alert";

import * as C from "../styles/pages.Styles";

const Revalidate: NextPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(String);

  const openAlert = (Message: string) => {
    setTimeout(() => {
      setShowAlert((prev) => !prev);
      setAlertMessage(Message);
    }, 1000);
  };
  return (
    <C.Container>
      <Head>
        <title>Revalidar | Carteirinha Estudantil | UNEB</title>
      </Head>
      <Alert
        showAlert={showAlert}
        text={alertMessage}
        type="success"
        setShowAlert={setShowAlert}
      />
      <C.FormRegister>
        <h2>REVALIDAÇÃO DA CARTEIRINHA</h2>
        <C.Input
          placeholder="Matrícula"
          type="text"
          name="matriculation"
          required
        />
        <C.Input placeholder="Senha" type="password" name="password" required />
        <C.Button
          color="primary"
          type="button"
          onClick={() => openAlert("Revalidado com sucesso!")}
        >
          Revalidar
        </C.Button>
      </C.FormRegister>
    </C.Container>
  );
};

export default Revalidate;
