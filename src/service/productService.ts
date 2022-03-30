import { ObjectId } from "mongodb"
import { IProduct } from "src/interfaces/productInterface"
import { mongoConnectDb, mongoDisconnect } from "src/database"

export const create = async (data: IProduct) => {
  const newProduct = (await mongoConnectDb()).collection(`productList`).insertOne(data)
  mongoDisconnect()
  return newProduct
}

export const findAll = async () => {
  const productList = (await mongoConnectDb()).collection(`productList`).find({}).toArray()
  mongoDisconnect()
  return productList
}

export const findOne = async (id: string) => {
  const product = (await mongoConnectDb()).collection(`productList`).findOne({ _id: new ObjectId(id) })
  mongoDisconnect()
  return product
}

export const update = async (id: string, product: IProduct) => {
  return (await mongoConnectDb()).collection(`productList`).updateOne({ _id: new ObjectId(id) }, { $set: product })
}