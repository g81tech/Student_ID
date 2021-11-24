/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdClose } from "react-icons/md";
import { Background, CardModal } from "../styles/components.Styles";

export default function Modal(props: any) {
  const { student, universityImage, universityName, showModal, setShowModal } =
    props;
  return (
    <>
      {showModal ? (
        <Background>
          <CardModal>
            <MdClose
              className="close"
              onClick={() => setShowModal((prev: any) => !prev)}
            />
            <div className="image">
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "1rem",
                  border: "0.2rem solid #009774",
                }}
                src={student.image}
              />
            </div>
            <div className="data">
              <p>{student.name}</p>
              <p>{student.courseStudent}</p>
              <p>{student.status ? "Ativo" : "Inativo"}</p>
              <p>{student.semester}</p>
              <p>{student.code}</p>
            </div>
            <div className="university">
              <img style={{ width: "5rem" }} src={universityImage} />
              <p
                style={{
                  alignItems: "center",
                  fontSize: "10px",
                  display: "flex",
                  margin: "0 auto",
                }}
              >
                {universityName}
              </p>
            </div>
          </CardModal>
        </Background>
      ) : null}
    </>
  );
}
