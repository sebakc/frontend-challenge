import React, { FunctionComponent, useState } from 'react'
import { Slider } from 'primereact/slider';
import IProduct from '../../interfaces/Product';

type Props = {
  products: IProduct[]
}


const ProductFilter: FunctionComponent<Props> = ({ products }) => {
  const [rangeValues, setRangeValues] = useState<any>([10,90]);

  return(
    <aside id="filters" className="card">
      <h3 className="h5 m-0 uppercase">Filtros</h3>
      <label className="my-3 d-block">Rango de precios</label>
      <Slider className="app-slider" value={rangeValues} onChange={(e) => setRangeValues(e.value)} range />
      <div className="mt-1">
        <div className="p-grid">
          <div className="p-col-6 text-left">{rangeValues[0]}</div>
          <div className="p-col-6 text-right">{rangeValues[1]}</div>
        </div>
      </div>
      <hr className="my-1" />
    </aside>
  )
}

export default ProductFilter