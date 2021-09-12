import React, { FunctionComponent } from 'react'
import navStyles from './Header.module.scss'
import Image from 'next/image'
import vkontakte from './images/vkontakte.png'
import facebook from './images/facebook.png'

type Props = {
  nav: [
    {
      label: string,
      link: string,
      active: boolean
    }
  ]
}

const AppHeader: FunctionComponent<Props> = ({ nav }) => {
  
  return (
    <header className={navStyles.header}>
      <div className="limit">
        <div className={`${navStyles.topbar} p-grid mx-0`}>
          <div className="p-col p-col-align-center">
            <ul>
              <li>Nosotros</li>
              <li>Blog</li>
              <li>
                <span className="social-network-icon text-center">
                  <Image src={facebook} alt="site logo" width={10} height={20} />
                </span>
              </li>
              <li>
                <span className="social-network-icon text-center">
                  <Image src={vkontakte} alt="site logo" width={25} height={20} />
                </span>
              </li>
            </ul>
          </div>
          <div className="p-col text-center">
            <Image src="/logo.png" alt="site logo" width={200} height={90} />
          </div>
          <div className={navStyles.bars}>
            <i className="pi pi-bars"></i>
          </div>
          <div className="topbar-item topbar--settings p-col p-col-align-center">
            <div className="p-d-flex p-justify-end">
              <div className="btn btn-dark">Convertirse en distribuidor</div>
              <div className="ml-2 btn btn-light btn-small">
                <i className="pi pi-shopping-cart"></i>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <hr />
          <ul>
            {
              nav.map((el, index) => (
                <li key={index}>
                  <a className={`${el.active ? navStyles.active : ''}`} data-label={el.label}>
                    {el.label}
                  </a>
                </li>
              ))
              
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default AppHeader