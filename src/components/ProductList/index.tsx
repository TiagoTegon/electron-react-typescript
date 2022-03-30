import React from 'react'
import './styles.scss'

export const ProductList = ({ productList, eventClick }: any) => {
  return (
    <div className="productListContainer">
      <div className="productsList">
        <table className="productTable" >
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(productList).map((item: any) => (
              <tr key={item[1]._id}>
                <td>{item[1].productName}</td>
                <td>{item[1].productPrice}</td>
                <td>{item[1].productDescription}</td>
                <td>{item[1].productAmount}</td>
                <td>
                  <button onClick={() => eventClick(item[1]._id)}>→</button>
                </td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </div>
  )
}