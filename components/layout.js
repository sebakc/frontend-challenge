import navStyles from '../styles/Header.module.scss'
import Image from 'next/image'

export default function Layout({ children }) {
  const nav = [
    { label: 'Todo el catálogo', link: '#' },
    { label: 'Vino', link: '#' },
    { label: 'Vodka', link: '#' },
    { label: 'Champagne', link: '#' },
    { label: 'Coñac', link: '#' },
    { label: 'Whisky', link: '#' }
  ]
  return (
    <div>
      <header className={navStyles.header}>
        <div className="limit">
          <div className={navStyles.topbar}>
            <div>
              <ul>
                <li>Nosotros</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="w100 p-grid p-justify-between p-align-center">
              <div className="p-col">
                <Image src="/logo.png" alt="site logo" width={200} height={90} />
              </div>
              <div className={navStyles.bars}>
                <i className="pi pi-bars"></i>
              </div>
            </div>
            <div className="topbar-item topbar--settings">

            </div>
          </div>
          <nav>
            <ul>
              {
                nav.map((el, index) => (
                  <li key={index}>
                    <a data-label={el.label}>
                      {el.label}
                    </a>
                  </li>
                ))
                
              }
            </ul>
          </nav>
        </div>
      </header>
    
      <div className="limit">
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  )
}