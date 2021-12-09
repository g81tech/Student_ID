/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import Modal from "../components/Modal";

import * as C from "../styles/pages.Styles";

type Data = {
  result: string;
};

const courses = [
  { nameCourse: "Todos", key: 0 },
  { nameCourse: "Sistemas de Informação", key: 2 },
  { nameCourse: "Engenharia Sanitária Ambiental", key: 3 },
  { nameCourse: "Matemática", key: 4 },
];

const semester = [
  { numberSemester: "Todos", key: 0 },
  { numberSemester: "1", key: 1 },
  { numberSemester: "2", key: 2 },
  { numberSemester: "3", key: 3 },
  { numberSemester: "4", key: 4 },
  { numberSemester: "5", key: 5 },
  { numberSemester: "6", key: 6 },
  { numberSemester: "7", key: 7 },
  { numberSemester: "8", key: 8 },
  { numberSemester: "9", key: 9 },
  { numberSemester: "10", key: 10 },
  { numberSemester: "11", key: 11 },
  { numberSemester: "12", key: 12 },
];

// const Home: NextPage = () => {
const Home:NextPage = ({ result }:any) => {
  console.log(result)
  const universityImage =
    "https://portal.uneb.br/wp-content/themes/tema_padrao/inc/image/logo.png";
  const universityName = "Universidade do Estado da Bahia";

  const [selectedFilterCourse, setSelectedFilterCourse] = useState("");
  const [selectedFilterSemester, setSelectedFilterSemester] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalStudent, setModalStudent] = useState({});

  function parseSelected(event: any) {
    const valueToParse = event.target.value;
    const itemSelected = JSON.parse(valueToParse);
    if(itemSelected.nameCourse)
      setSelectedFilterCourse(itemSelected.nameCourse);
    if(itemSelected.numberSemester)
    setSelectedFilterSemester(itemSelected.numberSemester);
    return;
  }
  const openModal = (student: any) => {
    setShowModal((prev) => !prev);
    setModalStudent(student);
  };

  return (
    <C.Container>
      <Head>
        <title>Carteirinha Estudantil | UNEB</title>
      </Head>
      <Modal
        student={modalStudent}
        universityImage={universityImage}
        universityName={universityName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <C.Filter>
        <p style={{ color: "#fff" }}>Filtragem por curso</p>
        <select name="any" id="any" onChange={parseSelected}>
          {courses.map((course) => (
            <option key={course.key} value={JSON.stringify(course)}>
              {course.nameCourse}
            </option>
          ))}
        </select>

        <p style={{ color: "#fff" }}>Filtragem por semestre</p>
        <select name="any" id="any" onChange={parseSelected}>
          {semester.map((semester) => (
            <option key={semester.key} value={JSON.stringify(semester)}>
              {semester.numberSemester}
            </option>
          ))}
        </select>
      </C.Filter>
      <C.ListID>
        {result.map((result:any) => (
          <div
            key={result.idStudent}
            onClick={() => openModal(result)}
            className="id"
          >
            <div className="image">
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "1rem",
                  border: "0.2rem solid #009774",
                }}
                alt={result.name}
                src={result.photo} 
              />
            </div>
            <div className="data">
              <p>{result.name.toUpperCase()}</p>
              <p>{result.courseStudent}</p>
              <p>{result.status ? "Ativo" : "Inativo"}</p>
              <p>{result.semester}</p>
              <p>{result.codeStudent}</p>
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
          </div>
        ))}
      </C.ListID>
    </C.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({res}) => {
try {
    const res = await fetch("http://carteirinhauneb.vercel.app/api/registerStudent");
    const result:any = await res.json();
    return {
      props:  {result}
    } 
  }
 catch {
  res.statusCode = 404;
  return {
    props: {}
  };
}
}
export default Home;
