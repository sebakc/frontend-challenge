import React, { FunctionComponent } from 'react'
import titleStyles from '../styles/sectionTitle.module.scss'
type Props = {
  title: String,
  suptitle: String,
  suptitle2: String
}

const SectionTitle: FunctionComponent<Props> = ({ title, suptitle, suptitle2 }) => (
  <header className="text-center mt-5 mb-6">
    <div>
      <span className={`${titleStyles.suptitle} ${titleStyles.suptitleActive}`}>
        { suptitle }
      </span>
      <span className={titleStyles.separator}></span>
      <span className={titleStyles.suptitle}>
        { suptitle2 }
      </span>
    </div>
    <div className="title">
      <h2 className="h1 mb-0 mt-1">
        { title }
      </h2>
    </div>
  </header>
)

export default SectionTitle