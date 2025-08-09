import { dataMenu } from './constants'

import 'reactjs-popup/dist/index.css';
import './addPopup.scss'
import styles from './navigationMenu.module.scss'

const NavigateMenu = () => {
  return (
    <ul className={`${styles.ulClass} group`}>
      {dataMenu.map((item) => <item.component key={item.name} name={item.name} path={item.path} />)}
    </ul>
  )
}

export default NavigateMenu