import React, { FunctionComponent } from 'react'
import footerStyles from './Footer.module.scss'
import Image from 'next/image'
import vkontakte from './images/vkontakte.png'
import facebook from './images/facebook.png'

const AppFooter: FunctionComponent = () => {
  
  return (
    <footer className={`${footerStyles.footer}`}>
      <div className="p-grid pt-8 mx-0">
        <div className="p-col-12 p-md-3">
          <Image src='/logo.png' alt="site logo" width={200} height={90} />
        </div>
        <div className="p-col-12 p-md-3">
          <i className="pi pi-send"></i>
          <br />
          Chile, <strong>calle falsa, 44,</strong>
          <br />
          Santiago, Las Condes
        </div>
        <div className="p-col-12 p-md-2">
          <i className="pi pi-phone"></i>
          <br />
          +56 (9) <strong>8765 4321</strong>
          <br />
          10:00 - 20:00
        </div>
        <div className="p-col-12 p-md-2">
          <i className="pi pi-comment"></i>
          <br />
          info@email.com
          <br />
          order@email.com
        </div>
        <div className="p-col-12 p-md-2">
          <div className="btn btn-dark">Solicitar llamada</div>
          <br />
          <small>... ... ... .. ..</small>
        </div>
      </div>
      <div className="p-grid mx-0 p-justify-center">
        <div className="p-col-12 p-md-3">
          <h3 className="h5">Catálogo</h3>
          <div className="p-grid">
            <div className="p-col">
              <ul className="list">
                <li>Vino</li>
                <li>Vodka</li>
                <li>Cerveza</li>
              </ul>
            </div>
            <div className="p-col">
              <ul className="list">
                <li>Coñac</li>
                <li>Whisky</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-col-12 p-md-3">
          <h3 className="h5">Ventas</h3>
          <ul className="list">
            <li>Nosotros</li>
            <li>Blog</li>
            <li>Conviertete en distribuidor</li>
          </ul>
        </div>
        <div className="p-col-12 p-md-3">
          <h3 className="h5">Redes Sociales</h3>
          <ul className="list">
            <li>
              <a href="https://www.vk.com/" target="_blank" rel="noreferrer">
                <span className="social-network-icon text-center">
                  <Image src={vkontakte} alt="site logo" width={25} height={20} />
                </span>
                Vkontakte
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <span className="social-network-icon text-center">
                  <Image src={facebook} alt="site logo" width={10} height={20} />
                </span>
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="p-col-12 p-md-3">
          <h3 className="h5">Información</h3>
          <ul className="list">
            <li>Condiciones</li>
            <li>...</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default AppFooter