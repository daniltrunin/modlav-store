import styles from './MobileHeader.module.css';
import {useSelector} from "react-redux";
import {useState} from "react";
import search from '../../assets/icons/Search.svg';
import profile from '../../assets/icons/User.svg';
import favorites from '../../assets/icons/Heart.svg';
import shoppingCart from '../../assets/icons/Bag.svg';
import burger from '../../assets/icons/burger.svg'
import MobileLogo from "../../components/Logo/MobileLogo.jsx";

export default function MobileHeader() {
    const favoritesCount = useSelector((state) => state.favorites.value)
    const [IsBurgerOpen, setIsBurgerOpen] = useState(false);

    return (
        <>


            <>
                {IsBurgerOpen ? (
                    <div className={styles['burger-open-active']}>
                        <div onClick={() => setIsBurgerOpen(!IsBurgerOpen)} className={styles['close-burger']}>Закрыть</div>
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
                                onClick={() => setIsBurgerOpen(!IsBurgerOpen)}
                                className={styles.burger}
                                src={burger}
                                alt='Развернуть меню'
                                onClick={() => setIsBurgerOpen(true)} // возможно, ты забыл обработчик
                            />
                        </div>
                    </header>
                )}
            </>
        </>
    )
}