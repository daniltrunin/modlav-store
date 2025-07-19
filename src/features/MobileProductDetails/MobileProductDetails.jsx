import styles from "./MobileProductDetails.module.css";
import {Link} from "react-router-dom";
import image from "../../assets/images/CardListItemPicture.png";

const sizesArray = ['42', '44', '46', '48', '50', '52', '54', '56']

export default function MobileProductDetails(props) {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <Link to="/" className={styles.previous}>
                    Каталог
                </Link>
                <div className={styles.previous}>&gt;</div>
                <div className={styles.current}>Легкая летняя ветровка MOD LAV</div>
            </div>
            <div className={styles["image-wrapper"]}>
                <img className={styles.image} src={image}/>
            </div>
            <div className={styles.swipe}>
                <div
                    className={`${styles["swipe-item"]} ${styles["swipe-item--active"]}`}
                ></div>
                <div className={styles["swipe-item"]}></div>
                <div className={styles["swipe-item"]}></div>
                <div className={styles["swipe-item"]}></div>
                <div className={styles["swipe-item"]}></div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: '1.4rem',
                width: "100%",
                marginBottom: '1.2rem'
            }}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.details}>
                <h1 className={styles['product-name']}>Легкая летняя ветровка MODLAV</h1>
                <div className={styles.price}>5 500 р.</div>
                <div className={styles['sizes-wrapper']}>
                    <div className={styles['size-heading']}>Размер:</div>
                    <div className={styles['size-array']}>{sizesArray.map((size) => {
                        return <div className={styles['size-item']}>{size}</div>
                    })}</div>
                </div>
                <div className={styles['color-wrapper']}>
                    <div className={styles['color-heading']}>Цвет:</div>
                    <div className={styles['color-item']}>Розовый</div>
                </div>
                <div className={styles['add-to-cart-button']}>Добавить в корзину</div>
            </div>
        </div>
    );
}
