import { IProduct } from "src/interfaces/productInterface"
import { create, findAll } from "../service/productService"

export const createProduct = (data: IProduct) => {
  return create(data)
}

export const findAllProducts = () => {
  return findAll()
}
