import { connectDb } from "src/database/mongo"

export async function createCollection() {
  return (await connectDb()).createCollection(`productList`, () =>{})
}