/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

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
function dataStudent(
  name: string,
  courseStudent: string,
  status: boolean,
  semester: string,
  code: number,
  image: string
) {
  return { name, courseStudent, status, semester, code, image };
}
const students = [
  dataStudent(
    "Gabriel Silva da Cruz",
    "Sistemas de Informação",
    true,
    "5º Semestre",
    789562216,
    "https://github.com/Gabrielg81.png"
  ),
  dataStudent(
    "Alex Silva",
    "Sistemas de Informação",
    true,
    "5º Semestre",
    45566565,
    "https://github.com/leksansilva.png"
  ),
  dataStudent(
    "João Paulo",
    "Sistemas de Informação",
    true,
    "5º Semestre",
    342423343,
    "https://github.com/jps198.png"
  ),
];

// const Home: NextPage = () => {
const Home: NextPage<{ data: Data }> = (props) => {
  const universityImage =
    "https://portal.uneb.br/wp-content/themes/tema_padrao/inc/image/logo.png";
  const universityName = "Universidade do Estado da Bahia";

  const [selectedFilterCourse, setSelectedFilterCourse] = useState({});
  const [selectedFilterSemester, setSelectedFilterSemester] = useState({});

  function parseSelected(event: any) {
    const valueToParse = event.target.value;
    const itemSelected = JSON.parse(valueToParse);
    setSelectedFilterCourse(itemSelected);
    setSelectedFilterSemester(itemSelected);
    return;
  }

  return (
    <C.Container>
      <Head>
        <title>Carteirinha Estudantil | UNEB</title>
      </Head>

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
      <p>Filtro curso: {selectedFilterCourse.nameCourse}</p>

      <p>Filtro semestre: {selectedFilterSemester.numberSemester}</p>
      <C.ListID>
        {students.map((student, index) => (
          <div key={index} className="id">
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
          </div>
        ))}
      </C.ListID>
    </C.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const result = await fetch(`http://localhost:3000/api/authStudent`);
    const data = await result.json();
    console.log("isso " + data.result);
    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: { message: "erro" },
    };
  }
};

export default Home;
