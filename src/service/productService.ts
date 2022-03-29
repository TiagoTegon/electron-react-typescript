//import { ObjectId } from "mongodb"
import { IProduct } from "src/interfaces/productInterface"
import { mongoConnectDb, mongoDisconnect } from "src/database"

export const create = async (data: IProduct) => {
  const newProduct = (await mongoConnectDb()).collection(`productList`).insertOne(data)
  mongoDisconnect()
  return newProduct
}

export const findAll = async () => {
  const productList = (await mongoConnectDb()).collection(`productList`).find()
  mongoDisconnect()
  return productList
}