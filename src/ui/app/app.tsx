import React, { useState, useEffect } from 'react'

import './app.scss'
import { ProductList } from 'src/components/ProductList'
import { createProduct, findAllProducts } from 'src/controller/productController'
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

  const handleCreateProduct = async(productName: string, productPrice: number, productDescription: string, productAmount: number) => {
    const product = { "productName": productName, "productPrice": productPrice, "productDescription": productDescription, "productAmount": productAmount }
    await createProduct(product)
    await listProducts()
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/ui/app.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="productListDiv">
        <h3 className="title">Lista de Produtos</h3>
        <ProductList productList={productList}/>
      </div>

      <div className="productAddDiv">
        <h3 className="title">Produto</h3>
        <AddProduct tempId={tempId} handleCreateProduct={handleCreateProduct}/>
      </div>
    </div>
  )
}