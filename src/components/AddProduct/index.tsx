import React, { useState } from "react"
import './styles.scss'

export const AddProduct = ({ tempId, setTempId, handleCreateProduct }: any) => {

  const [productName, setProductName] = useState<string>(``)
  const [productPrice, setProductPrice] = useState<number>(0)
  const [productDescription, setProductDescription] = useState<string>(``)
  const [productAmount, setProductAmount] = useState<number>(0)
  const [productId, setProductId] = useState<string>(``)

  const handleSubmit = async (productName: string, productPrice: number, productDescription: string, productAmount: number) => {
    if(productName !== ``) {
      if(productId === ``) {
        await handleCreateProduct(productName, productPrice, productDescription, productAmount)
        console.log(`Produto criado ${productName}`)
        setProductName(``)
        setProductPrice(0)
        setProductDescription(``)
        setProductAmount(0)
      }
      //update else
    }
  }

  return (
    <div>
      <div>
        <input className="#" type="text" placeholder="Nome do Produto" value={productName} onChange={(event) => { setProductName(event.target.value) }} />
      </div>
      <div>
        <input className="#" type="number" placeholder="Preço do Produto" value={productPrice} onChange={(event) => { setProductPrice(event.target.valueAsNumber) }} />
      </div>
      <div>
        <input className="#" type="text" placeholder="Descrição do Produto" value={productDescription} onChange={(event) => { setProductDescription(event.target.value) }} />
      </div>
      <div>
        <input className="#" type="number" placeholder="Quantidade do Produto" value={productAmount} onChange={(event) => { setProductAmount(event.target.valueAsNumber) }} />
      </div>
      <div>
        <button className="#" onClick={() => handleSubmit(productName, productPrice, productDescription, productAmount)}>{productId === `` ? `Cadastrar Produto ` : `Atualizar Tarefa`}</button>
      </div>
    </div>
  )

}