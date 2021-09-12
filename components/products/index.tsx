import React, { FunctionComponent } from 'react'
import IProduct from '../../interfaces/Product'
import Product from './Product'

type Props = {
  products: IProduct[]
}

const Products: FunctionComponent<Props> = ({ products }) => (
  <div className="p-grid">
    {products.map((product: IProduct) => (
      <div key={product.id} className="p-col-4">
        <Product product={product} />
      </div>
    ))}
  </div>
)

export default Products