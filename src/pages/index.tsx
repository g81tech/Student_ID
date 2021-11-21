/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'

import * as C from '../styles/pages.Styles'

type Data = {
  result: string;
};


// const Home: NextPage = () => {
const Home: NextPage<{data: Data}> = props => {
  const universityImage = 'https://portal.uneb.br/wp-content/themes/tema_padrao/inc/image/logo.png'
  const universityName = 'Universidade do Estado da Bahia'
  return (
    <C.Container>
      <Head>
        <title>Carteirinha Estudantil | UNEB</title>
      </Head>

      <C.Filter>
        <ul>
          <li>01</li>
          <li>02</li>
        </ul>
      </C.Filter>
    
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

