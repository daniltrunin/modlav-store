import styles from './MobileHeader.module.css';
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import search from '../../assets/icons/Search.svg';
import profile from '../../assets/icons/User.svg';
import favorites from '../../assets/icons/Heart.svg';
import shoppingCart from '../../assets/icons/Bag.svg';
import burger from '../../assets/icons/burger.svg'
import MobileLogo from "../../components/Logo/MobileLogo.jsx";

export default function MobileHeader() {
    const favoritesCount = useSelector((state) => state.favorites.value)
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        if (isBurgerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    })

    return (
        <>
            {isBurgerOpen ? (
                <div className={styles['burger-open-active']}>
                    <div onClick={() => setIsBurgerOpen(!isBurgerOpen)} className={styles['close-burger']}>Закрыть</div>
                    <nav className={styles['burger-controls']}>
                        <div className={styles['controls-item']}>
                            <img src={search} alt={'Иконка поиска'}/>
                        </div>
                        <div className={styles['controls-item']}>
                            <img src={profile} alt={'Иконка профиля'}/>
                        </div>
                        <div className={styles['controls-item']}>
                            <img src={favorites} alt={'Иконка избранных'}/>
                            <span className={styles.counter}>{favoritesCount}</span>
                        </div>
                        <div className={styles['controls-item']}>
                            <img src={shoppingCart} alt={'Иконка корзины'}/>
                            <span className={styles.counter}>0</span>
                        </div>
                    </nav>
                </div>
            ) : (
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <MobileLogo/>
                    </div>
                    <div className={styles['mobile-controls']}>
                        <img className={styles.search} src={search} alt='Поиск'/>
                        <img
                            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                            className={styles.burger}
                            src={burger}
                            alt='Развернуть меню'
                            onClick={() => setIsBurgerOpen(true)} // возможно, ты забыл обработчик
                        />
                    </div>
                </header>
            )}
        </>
    )
}