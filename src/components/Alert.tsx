import React from "react";
import { MdClose } from "react-icons/md";
import { AlertCard } from "../styles/components.Styles";


export default function Alert(props: any) {
  const { showAlert, setShowAlert, text, type } = props;
  return (
    <>
      {showAlert ? (
        <AlertCard color={type}>
          <p>{text.toUpperCase()}</p>
          <MdClose
            className="close"
            onClick={() => setShowAlert(false)}
          />
        </AlertCard>
      ) : null}
    </>
  );
}
