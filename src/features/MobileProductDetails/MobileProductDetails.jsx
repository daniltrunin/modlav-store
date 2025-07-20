import styles from "./MobileProductDetails.module.css";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import image from "../../assets/images/CardListItemPicture.png";
import favorite from '../../assets/icons/Heart.svg'
import Button from '../../components/Button/Button.jsx'
import {fetchProductsById} from "../../shared/api/fetchProductById.js";

const sizesArray = ['42', '44', '46', '48', '50', '52', '54', '56']

export default function MobileProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetchProductsById(id);
                setProduct(data);
            } catch (error) {
                console.error('Ошибка при загрузке товара:', error);
            }
        };

        getProduct();
    }, [id]);

    if (!product) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <Link to="/" className={styles.previous}>
                    Каталог
                </Link>
                <div className={styles.previous}>&gt;</div>
                <div className={styles.current}>{product.title}</div>
            </div>
            <div className={styles["image-wrapper"]}>
                <img className={styles.image} src={product.images[0]}/>
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
                <h1 className={styles['product-name']}>{product.title}</h1>
                <div className={styles.price}>{product.price * 100} р</div>
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
                <div className={styles['purchase-wrapper']}>
                    <Button
                        text="Добавить в корзину"
                        fontColor="var(--button-font-color-details-primary)"
                        backgroundColor="var(--button-background-details-color-primary)"
                        backgroundHoverColor="var(--button-background-details-color-primary-hover)"
                    />
                    <img className={styles['add-to-favorites-button']} src={favorite}/>
                </div>
                <div className={styles.line}></div>
                <div className={styles['description-wrapper']}>
                    <div className={styles['description-title']}>Описание</div>
                    <div className={styles['description-text']}>{product.description}</div>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}
