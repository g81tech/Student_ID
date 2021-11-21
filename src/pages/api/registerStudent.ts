import type { NextApiRequest, NextApiResponse } from "next";
import User from '../../models/user'
import * as bcrypt from 'bcrypt';


const registerStudent = async(req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
    case "POST": {
      return register(req, res);
    }
  }
}

async function register(req: NextApiRequest, res: NextApiResponse) {
    let dados = req.body;
    dados.senha = await bcrypt.hash(dados.senha, 8);

    await User.create(dados).then(function () {
        return res.json({
            erro: false,
            messagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(function () {
        return res.json({
            erro: true,
            messagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    });

}

export default registerStudent