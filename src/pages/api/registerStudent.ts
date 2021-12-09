import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'next'
import {StudentCheckModel} from '../../db/models/StudentCheckModel'
import * as bcrypt from 'bcrypt';
import { db } from "../../db/config";


const registerStudent = async(req: NextApiRequest, res: NextApiResponse) => {
    
    switch (req.method) {
    case "POST": {
      return registryID(req, res);
    }
    case "GET": {
        return getRegistryID(req, res);
      }
  }
}

async function registryID(req: NextApiRequest, res: NextApiResponse) {

    await db.sync(); //Sincronizar tabelas do banco de dados
    const data = req.body;
    data.password = await bcrypt.hash(data.password, 8);
    const studentCheck = await StudentCheckModel.findOne ({
        where: {
            codeStudent: data.codeStudent,
            cpf: data.cpf
        }
    })

    if (studentCheck)
    {
       return res.status(501).json({
            success: false,
            messagem: "Estudante já cadastrado!"
        })
    }

    await StudentCheckModel.create(data) //Cadastrar os dados vindos do frontend no banco de dados
    .then(()=> {
        return res.status(200).json({
            success: true,
            messagem: "Estudante cadastrado com sucesso!"
        })
    })
    .catch(()=> {
        return res.status(400).json({
            success: false,
            messagem: "Erro ao cadastrar estudante!"
        })
    })
}

async function getRegistryID(req: NextApiRequest, res: NextApiResponse) {
    const allStudentIDs = await StudentCheckModel.findAll();
    return allStudentIDs.length > 0
    ? res.status(200).setHeader('Content-Type', 'application/json').end(JSON.stringify({allStudentIDs}))   
    : res.status(204).json({success: false, mensagem: 'Não há estudantes cadastrados!'});
}

export default registerStudent