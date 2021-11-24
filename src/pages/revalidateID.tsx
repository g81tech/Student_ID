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
      <C.TextCard>
        <p>É NECESSÁRIO FAZER A REVALIDAÇÃO A CADA 6 MESES</p>
      </C.TextCard>
      <Alert
        showAlert={showAlert}
        text={alertMessage}
        type="success"
        setShowAlert={setShowAlert}
      />
      <C.FormRegister>
        <h2 className="txt">REVALIDAÇÃO DA CARTEIRINHA</h2>
        <div>
          <p>&nbsp;&nbsp;&nbsp;MATRÍCULA:</p>
          <C.Input
            placeholder="Sua Matrícula"
            type="text"
            name="matriculation"
            required
          />
        </div>
        <div>
          <p>&nbsp;&nbsp;&nbsp;SENHA:</p>
          <C.Input
            placeholder="Os 6 primeiros dígitos do CPF"
            type="password"
            name="password"
            required
          />
        </div>
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
