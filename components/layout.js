import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import Image from 'next/image'

export default function Layout({ children }) {
  const nav = [
    { label: 'Todo el catálogo', link: '#' },
    { label: 'Vino', link: '#' },
    { label: 'Vodka', link: '#' },
    { label: 'Cerveza', link: '#', active: true },
    { label: 'Coñac', link: '#' },
    { label: 'Whisky', link: '#' }
  ]
  return (
    <div>
      <AppHeader nav={nav}/>
    
      <div className="limit">
        <main>{children}</main>
        <AppFooter />
      </div>
    </div>
  )
}