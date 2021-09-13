import React, { FunctionComponent, useState } from 'react'
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
const topLeftMenu = (
  <ul>
    <li>
      <a href="#">
        Nosotros
      </a>
    </li>
    <li>
      <a href="#">
        Blog
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <span className="social-network-icon text-center">
          <Image src={facebook} alt="site logo" width={10} height={20} />
        </span>
      </a>
    </li>
    <li>
      <a href="https://vk.com/" target="_blank" rel="noreferrer">
        <span className="social-network-icon text-center">
          <Image src={vkontakte} alt="site logo" width={25} height={20} />
        </span>
      </a>
    </li>
  </ul>
)

const cartMenu = (
  <div className="p-d-flex p-justify-center p-md-justify-end">
    <div className="btn btn-dark">Convertirse en distribuidor</div>
    <div className="ml-2 btn btn-light btn-small">
      <i className="pi pi-shopping-cart"></i>
    </div>
  </div>
)

const AppHeader: FunctionComponent<Props> = ({ nav }) => {

  const [active, toggleActive] = useState<boolean>(false);
  return (
    <header className={navStyles.header}>
      <div className="limit">
        <div className={`${navStyles.topbar} p-grid mx-0`}>
          <div className="p-col p-col-align-center hide-xs">
            { topLeftMenu }
          </div>
          <div className="p-col text-center">
            <Image src="/logo.png" alt="site logo" width={200} height={90} />
          </div>
          <div onClick={() => toggleActive(!active)} className={`${navStyles.bars} show-xs`}>
            <i className="pi pi-bars"></i>
          </div>
          <div className="topbar-item topbar--settings p-col p-col-align-center p-justify-end hide-xs">
            { cartMenu }
          </div>
        </div>
        <nav className={active ? navStyles.navActive : ''}>
          <hr className="hide-xs" />
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
            <div className="show-xs w100">
              { topLeftMenu }
            </div>
            <div className="show-xs">
              <div className="p-d-flex p-justify-center w100">
                { cartMenu }
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default AppHeader