import React, { FunctionComponent } from 'react'
import IProduct from '../../interfaces/Product'
import ProductStyle from './Product.module.scss'
import Image from 'next/image'

type Props = {
  product: IProduct
}

const Products: FunctionComponent<Props> = ({ product }) => {
  const formatName = (name: String) => {
    return name.length <= 13 ? name : name.slice(0,13) + '…'
  }
  const moneyFormat = (num: number) => {
    return new Intl.NumberFormat('es-CL').format(num);
  }
  return (
    <article className={ProductStyle.product}>


      <header>
        <svg width="66" height="31" viewBox="0 0 66 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.47186" width="94.0833" height="94.0833" transform="matrix(0.735931 -0.677056 0.735931 0.677056 -37.322 -33.3235)" fill="white" strokeWidth="2"/>
          <rect x="1.47186" width="94.0833" height="94.0833" transform="matrix(0.735931 -0.677056 0.735931 0.677056 -37.6113 -40.9496)" fill="white" strokeWidth="2"/>
          <path d="M32.942 2.02399L37.3126 6.41049L32.9718 17.3021L28.2185 6.36961L32.942 2.02399Z" fill="white" strokeWidth="2"/>
          <path d="M51 -1.66001C51 -1.11967 50.6931 -0.466676 49.8259 0.258794C48.9642 0.979739 47.6575 1.6739 45.955 2.27631C42.559 3.47797 37.802 4.24 32.5 4.24C27.198 4.24 22.441 3.47797 19.045 2.27631C17.3425 1.6739 16.0358 0.979739 15.1741 0.258794C14.3069 -0.466676 14 -1.11967 14 -1.66001C14 -2.20034 14.3069 -2.85333 15.1741 -3.5788C16.0358 -4.29975 17.3425 -4.99391 19.045 -5.59632C22.441 -6.79798 27.198 -7.56001 32.5 -7.56001C37.802 -7.56001 42.559 -6.79798 45.955 -5.59632C47.6575 -4.99391 48.9642 -4.29975 49.8259 -3.5788C50.6931 -2.85333 51 -2.20034 51 -1.66001Z" strokeWidth="2"/>
        </svg>
        <label>
          {product.first_brewed}
        </label>
        <h2>{ formatName(product.name) }</h2>
        <span>10 %</span>
      </header>
      <div>
        <Image src={product.image_url} alt="site logo" width={200} height={90} />
      </div>
      <footer>
        <span>
          ${moneyFormat(product.id*100+2000)}
          <sub>{moneyFormat(product.id*100+2000*1.1)}</sub>
        </span>
        <label>{product.abv}º</label>
        <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="24.5"/>
        </svg>
        <a href="">
          <i className="pi pi-briefcase">
          </i>
        </a>
      </footer>
    </article>
  )
}
export default Products