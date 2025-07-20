import styles from './MobileFooter.module.css'
import phone from '../../assets/icons/phone.svg'
import email from '../../assets/icons/email.svg'
import ok from '../../assets/icons/ok.png'
import telegram from '../../assets/icons/telegram.png'

export default function MobileFooter() {

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <ul>
                    <li navigate>Каталог</li>
                    <li>Новинки</li>
                    <li>Доставка и оплата</li>
                    <li>Отзывы</li>
                    <li>О промокодах</li>
                    <li>Политика конфиденциальности</li>
                    <li>Обработка персональных данных</li>
                    <li>Оферта</li>
                </ul>
            </nav>
            <hr className={styles.line}></hr>
            <div className={styles.contacts}>
                <div className={styles['contact-item']}>
                    <img src={phone}/>
                    +7 (800) 350-75-28
                </div>
                <div className={styles['contact-item']}>
                    <img src={email}/>
                    <a href="mailto:modlav.gmail.com">modlav.gmail.com</a>
                </div>
            </div>
            <div className={styles.socials}>
                <a>
                    <img src={ok}/>
                </a>
                <a>
                    <img src={telegram}/>
                </a>
            </div>
        </div>
    )
}