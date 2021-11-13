import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'

import * as C from '../styles/pages.Styles'

type Data = {
  result: string;
};


// const Home: NextPage = () => {
const Home: NextPage<{data: Data}> = props => {
  return (
    <C.Container>
      <Head>
        <title>Carteirinha Estudantil | UNEB</title>
      </Head>
      
      <h1>Hello World - {props.data.result}</h1>
     

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

