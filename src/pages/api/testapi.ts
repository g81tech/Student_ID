import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST": {
          return registryID(req, res);
        }
        case "GET": {
            return getRegistryID(req, res);
          }
      }
};

async function getRegistryID(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json({ name: 'Carteirinha UNEB get!' })
}

function registryID(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json({ name: 'Carteirinha UNEB post!' })
}