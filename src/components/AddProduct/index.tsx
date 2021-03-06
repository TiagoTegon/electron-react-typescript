import React, { useState } from "react"
import { findOneProduct } from "src/controller/productController"
import './styles.scss'

export const AddProduct = ({ tempId, setTempId, eventCreateProduct, eventUpdateProduct, eventExcludeProduct }: any) => {

  const [productName, setProductName] = useState<string>(``)
  const [productPrice, setProductPrice] = useState<number>(0)
  const [productDescription, setProductDescription] = useState<string>(``)
  const [productAmount, setProductAmount] = useState<number>(0)
  const [productId, setProductId] = useState<string>(``)

  function clearFields() {
    setProductName(``)
    setProductPrice(0)
    setProductDescription(``)
    setProductAmount(0)
  }

  const submitProduct = async (productName: string, productPrice: number, productDescription: string, productAmount: number) => {
    if(productName !== `` && productPrice !== 0 && productDescription !== `` && productAmount !== 0) {
      if(productId === ``) {
        await eventCreateProduct(productName, productPrice, productDescription, productAmount)
        console.log(`Produto criado ${productName}`)
        clearFields()
      }
      else {
        await eventUpdateProduct(productId, productName, productPrice, productDescription, productAmount)
        clearFields()
      }
    }
  }

  const selectProduct = (id: string) => {
    findOneProduct(id).then(product => {
      setProductId(id)
      setProductName(product!.productName)
      setProductPrice(product!.productPrice)
      setProductDescription(product!.productDescription)
      setProductAmount(product!.productAmount)
      setTempId(``)
    })
  }

  const excludeProduct = async (id: string) => {
    if(productName !== `` && productPrice !== 0 && productDescription !== `` && productAmount !== 0) {
      await eventExcludeProduct(id)
      clearFields()
    }
  }

  return (
    <div className="container">
      {tempId !== `` ? (selectProduct(tempId)) : setTempId(``)} 
      <div>
        <text>Nome:</text>
        <input className="inputName" type="text" placeholder="Nome do Produto" value={productName} onChange={(event) => { setProductName(event.target.value) }} />
      </div>
      <div>
        <text>Pre??o:</text>
        <input className="inputPrice" type="number" placeholder="Pre??o do Produto" value={productPrice} onChange={(event) => { setProductPrice(event.target.valueAsNumber) }} />
      </div>
      <div>
        <text>Descri????o:</text>
        <input className="inputDescription" type="text" placeholder="Descri????o do Produto" value={productDescription} onChange={(event) => { setProductDescription(event.target.value) }} />
      </div>
      <div>
        <text>Quantidade:</text>
        <input className="inputAmount" type="number" placeholder="Quantidade do Produto" value={productAmount} onChange={(event) => { setProductAmount(event.target.valueAsNumber) }} />
      </div>
      <div>
        <button className="btnSubmit" onClick={() => submitProduct(productName, productPrice, productDescription, productAmount)}>Salvar Produto</button>
        <button className="btnExclude" onClick={() => excludeProduct(productId)}>Excluir Produto</button>
      </div>
    </div>
  )

}