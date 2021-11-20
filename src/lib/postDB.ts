interface StudentName {
    result: string
  }

export const postDB = async (result:StudentName) =>
{
    console.log("postar no banco de dados")
    console.log(result)
}