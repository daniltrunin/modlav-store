import styles from "./MobileFooter.module.css";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import ok from "../../assets/icons/ok.png";
import telegram from "../../assets/icons/telegram.png";

export default function MobileFooter() {
  return (
    <footer className={styles.container}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="/">Каталог</a>
          </li>
          <li>
            <a href="/new">Новинки</a>
          </li>
          <li>
            <a href="/delivery">Доставка и оплата</a>
          </li>
          <li>
            <a href="/reviews">Отзывы</a>
          </li>
          <li>
            <a href="/promo">О промокодах</a>
          </li>
          <li>
            <a href="/privacy">Политика конфиденциальности</a>
          </li>
          <li>
            <a href="/personal-data">Обработка персональных данных</a>
          </li>
          <li>
            <a href="/offer">Оферта</a>
          </li>
        </ul>
      </nav>
      <hr className={styles.line}></hr>
      <div className={styles.contacts}>
        <div className={styles["contact-item"]}>
          <img src={phone} />
          <a href="tel:+78003507528">+7 (800) 350-75-28</a>
        </div>
        <div className={styles["contact-item"]}>
          <img src={email} />
          <a href="mailto:modlav.gmail.com">modlav.gmail.com</a>
        </div>
      </div>
      <div className={styles.socials}>
        <a href="https://ok.ru/group/1234567890">
          <img src={ok} alt="OK" />
        </a>
        <a href="https://t.me/your_channel">
          <img src={telegram} alt="Telegram" />
        </a>
      </div>
    </footer>
  );
}
