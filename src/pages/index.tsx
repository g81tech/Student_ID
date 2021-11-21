/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import {useState} from 'react'

import * as C from '../styles/pages.Styles'

type Data = {
  result: string;
};

const courses = [
  { name: "Todos", key: 0 },
  { name: "Sistemas de Informação", key: 2 },
  { name: "Engenharia Sanitária Ambiental", key: 3 },
  { name: "Matemática", key: 4 }
];

const semester = [
  { number: "Todos", key: 0 },
  { number: 1, key: 1 },
  { number: 2, key: 2 },
  { number: 3, key: 3 },
  { number: 4, key: 4 },
  { number: 5, key: 5 },
  { number: 6, key: 6 },
  { number: 7, key: 7 },
  { number: 8, key: 8 },
  { number: 9, key: 9 },
  { number: 10, key: 10 },
  { number: 11, key: 11 },
  { number: 12, key: 12 }
];


// const Home: NextPage = () => {
const Home: NextPage<{data: Data}> = props => {
  const universityImage = 'https://portal.uneb.br/wp-content/themes/tema_padrao/inc/image/logo.png'
  const universityName = 'Universidade do Estado da Bahia'
  
  const [selectedFilterCourse, setSelectedFilterCourse] = useState(0)
  const [selectedFilterSemester, setSelectedFilterSemester] = useState(0)

  function parseSelected(event:any) {
    const valueToParse = event.target.value;
    const itemSelected = JSON.parse(valueToParse);
    setSelectedFilterCourse(itemSelected);
    setSelectedFilterSemester(itemSelected);
    return;
  }

console.log(selectedFilterCourse)
  return (
    <C.Container>
      <Head>
        <title>Carteirinha Estudantil | UNEB</title>
      </Head>

      <C.Filter>
      <p>Filtragem por curso</p>
      <select name="any" id="any" onChange={parseSelected}>
        {courses.map(course => (
          <option key={course.key} value={JSON.stringify(course)}>
            {course.name}
          </option>
        ))}
      </select>

      <p>Filtragem por semestre</p>
      <select name="any" id="any" onChange={parseSelected}>
        {semester.map(semester => (
          <option key={semester.key} value={JSON.stringify(semester)}>
            {semester.number}
          </option>
        ))}
      </select>
      
      </C.Filter>
      <p>Filtro curso: {selectedFilterCourse.name}</p>

<p>Filtro semestre: {selectedFilterSemester.number}</p>
     <C.ListID>
     

       <div className="id">
         <div className="image">
         <img style={{
           width: '100%',
           height: 'auto',
           borderRadius: '1rem',
           border: 'solid 0.2rem ${(props) => props.theme.colors.primary}'
           }} src="https://github.com/Gabrielg81.png" />
         </div>
          <div className="data">
            <p>Gabriel Silva da Cruz</p>
            <p>Sistemas de Informação</p>
            <p>Ativo</p>
            <p>Semestre 5</p>
            <p>789562216</p>
          </div>
          <div className="university">
            <img style={{width:'5rem'}} src={universityImage} />
            <p style={{alignItems: 'center', fontSize: '10px', display: 'flex', margin:'0 auto'}}>{universityName}</p>
          </div>
        </div>
       
        <div className="id">
         <div className="image">
         <img style={{
           width: '100%',
           height: 'auto',
           borderRadius: '1rem',
           border: 'solid 0.2rem ${(props) => props.theme.colors.primary}'
           }} src="https://github.com/leksansilva.png" />
         </div>
          <div className="data">
            <p>Alex Silva</p>
            <p>Sistemas de Informação</p>
            <p>Ativo</p>
            <p>Semestre 5</p>
            <p>59454564</p>
          </div>
          <div className="university">
            <img style={{width:'5rem'}} src={universityImage} />
            <p style={{alignItems: 'center', fontSize: '10px', display: 'flex', margin:'0 auto'}}>{universityName}</p>
          </div>
        </div>

        <div className="id">
         <div className="image">
         <img style={{
           width: '100%',
           height: 'auto',
           borderRadius: '1rem',
           border: 'solid 0.2rem ${(props) => props.theme.colors.primary}'
           }} src="https://github.com/jps198.png" />
         </div>
          <div className="data">
            <p>João Paulo</p>
            <p>Sistemas de Informação</p>
            <p>Ativo</p>
            <p>Semestre 5</p>
            <p>45566565</p>
          </div>
          <div className="university">
            <img style={{width:'5rem'}} src={universityImage} />
            <p style={{alignItems: 'center', fontSize: '10px', display: 'flex', margin:'0 auto'}}>{universityName}</p>
          </div>
        </div>
       
       
     </C.ListID>

    </C.Container>
  )
}


export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  try {
    const result = await fetch(`http://localhost:3000/api/authStudent`);
    const data = await result.json();
    console.log("isso " + data.result)
    return {
      props: { data }
    }
  } catch {
    res.statusCode = 404;
    return {
      props: {message: 'erro' }
    };
  }
};




export default Home

