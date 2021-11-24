import type { NextApiRequest, NextApiResponse } from "next";
import Student from '../../../db/models/student' 
import * as bcrypt from 'bcrypt';


const registerStudent = async(req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
    case "POST": {
      return register(req, res);
    }
  }
}

async function register(req: NextApiRequest, res: NextApiResponse) {
    let data = req.body;
    /*return res.status(200).json({
        success: true,
        messagem: "Estudante cadastrado com sucesso!",
        data
    })*/
    //data.password = await bcrypt.hash(data.password, 8);
    const studentCheck = await Student.findOne ({
        where: {
            codeStudent: data.codeStudent
        }
    })

    if (studentCheck)
    {
       return res.status(401).json({
            success: false,
            messagem: "Estudante já cadastrado!"
        })
    }

    await Student.create(data)
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

export default registerStudent