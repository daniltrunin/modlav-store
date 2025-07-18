import styles from './Header.module.css';
import {useSelector} from "react-redux";
import search from '../../assets/icons/Search.svg';
import profile from '../../assets/icons/User.svg';
import favorites from '../../assets/icons/Heart.svg';
import shoppingCart from '../../assets/icons/Bag.svg';

export default function Header() {
    const favoritesCount = useSelector((state) => state.favorites.value)

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    <li className={styles['navigation__item']}>
                        <a className={styles['navigation__link']}>Каталог</a>
                    </li>
                    <li className={styles['navigation__item']}>
                        <a className={styles['navigation__link']}>Новинки</a>
                    </li>
                    <li className={styles['navigation__item']}>
                        <a className={styles['navigation__link']}>Доставка и оплата</a>
                    </li>
                    <li className={styles['navigation__item']}>
                        <a className={styles['navigation__link']}>Отзывы</a>
                    </li>
                </ul>
            </nav>
            <nav className={styles.controls}>
                <div className={styles['controls-item']}>
                    <img className={styles.image} src={search} alt={'Иконка поиска'}/>
                </div>
                <div className={styles['controls-item']}>
                    <img className={styles.image} src={profile} alt={'Иконка профиля'}/>
                </div>
                <div className={styles['controls-item']}>
                    <img className={styles.image} src={favorites} alt={'Иконка избранных'}/>
                    <span className={styles.counter}>{favoritesCount}</span>
                </div>
                <div className={styles['controls-item']}>
                    <img className={styles.image} src={shoppingCart} alt={'Иконка корзины'}/>
                    <span className={styles.counter}>0</span>
                </div>
            </nav>
        </header>
    )
}