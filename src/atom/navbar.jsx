
import styles from './navbar.module.css'
import img1 from './images/newone.jpg'
import {AiOutlineMenu} from 'react-icons/ai'

export default function Navbar(){

    return(
                
                <div className={styles.nav}>
               
                <ul className={styles.nav2}>
                <div className={styles.newone}><AiOutlineMenu/></div>
                <li className={styles.nav3}>HOME</li>
                <li className={styles.nav3}>CAREER</li>
                <li className={styles.nav3}>ABOUT Us</li>
                </ul>
                
               <img src={img1} className={styles.new}></img>
            </div>
    )
}
