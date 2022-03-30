import { IProduct } from "src/interfaces/productInterface"
import { create, findAll, findOne, update } from "../service/productService"

export const createProduct = (product: IProduct) => {
  return create(product)
}

export const findAllProducts = () => {
  return findAll()
}

export const findOneProduct = (id: string) => {
  return findOne(id)
}

export const updateProduct = (id: string, product: IProduct) => {
  return update(id, product)
}
