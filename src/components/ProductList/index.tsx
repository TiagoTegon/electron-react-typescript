import React from 'react'
import './styles.scss'

export const ProductList = ({ productList }: any) => {
  return (
    <div className="productListContainer">
      <div className="productsList">
        <table>
          <thead>
            <tr>
              <th>Nome:</th>
              <th>Preço:</th>
              <th>Descrição:</th>
              <th>Quantidade:</th>
            </tr>
          </thead>
          {/* <tbody>
            {Object.entries(productList).map((item: any) => (
              <tr key={item[1]._id}>
                <td>{item[1].productName}</td>
                <td>{item[1].productPrice}</td>
                <td>{item[1].productDescription}</td>
                <td>{item[1].productAmount}</td>
              </tr>
            ))}
          </tbody>  */}
        </table>
      </div>
    </div>
  )
}