import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

const authStudent = async(req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST": {
      return checkInfoStudents(req, res);
    }
    case "GET": {
      return getStudentsID(req, res);
    }
  }
}

async function checkInfoStudents(req: NextApiRequest, res: NextApiResponse) {
  const pagePrimary =
    "http://www.portalacademico.uneb.br/PortalSagres/Acesso.aspx";
  const pageSecundary =
    "http://www.portalacademico.uneb.br/PortalSagres/Modules/Diario/Aluno/Relatorio/HistoricoEscolar.aspx";
  //http://www.portalacademico.uneb.br/PortalSagres/Modules/Diario/Aluno/Relatorio/ComprovanteMatricula.aspx

  const { matriculation, password } = req.body;

  let browser;
  
  browser = await puppeteer.launch({
      headless: true, //false abre interface gráfica true não abre.
      defaultViewport: null, //Tira o tamanho padrão 800x600
      args: ["--disable-setuid-sandbox", "--start-maximized"], //permite que seja uma página http e página maximizada
      ignoreHTTPSErrors: true,
    });
  try {
    const page = await browser.newPage();
    await page.goto(`${pagePrimary}`, {timeout: 10000});
    //O puppeter insere os dados de matrícula e senha nos campos e envia
    await page.type(
      '[name="ctl00$PageContent$LoginPanel$UserName"]',
      `${matriculation}`
    );
    await page.type("#ctl00_PageContent_LoginPanel_Password", `${password}`);
    await page.click('[type="submit"]');
    await page.waitForNavigation(); //Espera o carregamento da página
    // await page.goto(`${pageSecundary}`); //Página secundária desabilitada pois só pegaremos o nome até o momento
    const list = await page.evaluate(() => {
      // Aqui dentro executará toda DOM do javascript
      return {
        // score: document.querySelector
        // ('span#ctl00_MasterPlaceHolder_webPartManager_wp538595384_wp898799231_ucInfoSituacaoAluno_spanScore.destaque')?.innerHTML,
        //comentário desabilitado acima é para pegar o score
        //Abaixo pegamos o nome da pessoa
        name: document.querySelector("#ctl00_ConteudoTopo_UserName")?.innerHTML,
        // pdf: document.getElementsByTagName("iframe")[0].src, //pega o pdf comprovante de matrícula ou histórico
      };
    });
    await browser.close();
    if (list.name != undefined)
    {
      res.status(200).send({
        nome: list.name,
        // pdf: list.pdf, //retorno do pdf do comprovante de matrícula ou histórico
      });
    }
    else {
      return res.status(500).json({
        success: false,
      });
    }
  } catch (err) {
    await browser.close();
    console.log("Erro ao executar => : ", err);
    return res.status(404).json({
      success: false,
    });
  }
}

async function getStudentsID(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ result: 'Carteirinhas cadastradas no banco de dados' })
}

export default authStudent