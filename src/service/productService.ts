import { ObjectId } from "mongodb"
import { IProduct } from "src/interfaces/productInterface"
import { connectDb, disconnectDb } from "src/database/mongo"

export const create = async (data: IProduct) => {
  const newProduct = (await connectDb()).collection(`productList`).insertOne(data)
  disconnectDb()
  return newProduct
}

export const findAll = async () => {
  const productList = (await connectDb()).collection(`productList`).find({}).toArray()
  disconnectDb()
  return productList
}

export const findOne = async (id: string) => {
  const product = (await connectDb()).collection(`productList`).findOne({ _id: new ObjectId(id) })
  disconnectDb()
  return product
}

export const update = async (id: string, product: IProduct) => {
  const updateProduct = (await connectDb()).collection(`productList`).updateOne({ _id: new ObjectId(id) }, { $set: product })
  return updateProduct
}

export const exclude = async (id: string) => {
  const excludeProduct = (await connectDb()).collection(`productList`).deleteOne({ _id: id })
  return excludeProduct
}