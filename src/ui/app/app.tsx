import React, { useState, useEffect } from 'react'

import './app.scss'
import { ProductList } from 'src/components/ProductList'
import { createProduct, excludeProduct, findAllProducts, updateProduct } from 'src/controller/productController'
import { AddProduct } from 'src/components/AddProduct'

export const App: React.FC = () => {

  const [productList, setProductList] = useState<any>([])
  const [tempId, setTempId] = useState<string>(``)

  const listProducts = async () => {
    await findAllProducts().then((data) => {
      setProductList({ ...data })
    })
  }

  useEffect(() => {
    listProducts()
  }, [])

  const eventCreateProduct = async(productName: string, productPrice: number, productDescription: string, productAmount: number) => {
    const product = { "productName": productName, "productPrice": productPrice, "productDescription": productDescription, "productAmount": productAmount }
    await createProduct(product)
    await listProducts()
  }

  const eventUpdateProduct = async(productId: string, productName: string, productPrice: number, productDescription: string, productAmount: number) => {
    const product = { "productName": productName, "productPrice": productPrice, "productDescription": productDescription, "productAmount": productAmount }
    await updateProduct(productId, product)
    await listProducts()
  }

  const eventExcludeProduct = async(productId: string) => {
    await excludeProduct(productId)
    await listProducts()
  }

  const eventClick = async(id: string) => {
    setTempId(id)
    await listProducts()
  }

  return (
    <div className="App">
      <div className="productListDiv">
        <h3 className="title">Lista de Produtos</h3>
        <ProductList productList={productList} eventClick={eventClick}/>
      </div>

      <div className="productAddDiv">
        <h3 className="title">Produto</h3>
        <AddProduct tempId={tempId} setTempId={setTempId} eventCreateProduct={eventCreateProduct} eventUpdateProduct={eventUpdateProduct} eventExcludeProduct={eventExcludeProduct}/>
      </div>
      
    </div>
  )
}