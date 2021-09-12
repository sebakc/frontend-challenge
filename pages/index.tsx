import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Products from '../components/products'
import ProductFilter from '../components/productFilter'
import IProduct from '../interfaces/Product'
import SectionTitle from '../components/sectionTitle'

//import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks';
import {
  getProducts,
  selectProducts,
} from '../features/product/productItems';


const Home: NextPage = () => {
  const {
    data, 
    pending, 
    error,
  } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();


  const update = () => {
    dispatch(getProducts())
  }
  return (
    <div className={`${styles.container} p-grid p-grid-nogutter`}>
      <div className="p-col-12">
        <SectionTitle title="Cervezas" suptitle="Inicio" suptitle2="Catálogo de productos"/>
      </div>
      <div className="p-col-12 p-md-4 p-lg-3">
        <ProductFilter products={data} />
      </div>
      <div className="p-col-12 p-md-8 p-lg-9">
        <Products products={data} />
        <div className="text-center my-4">
          <button onClick={() => update()} className="btn btn-light btn-big">Ver más</button>
        </div>
      </div>
    </div>
  )
}

export default Home

//<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />