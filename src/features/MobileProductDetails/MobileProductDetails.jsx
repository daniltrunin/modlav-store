import styles from "./MobileProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "../../assets/images/CardListItemPicture.png";
import favorite from "../../assets/icons/Heart.svg";
import Button from "../../components/Button/Button.jsx";
import { fetchProductsById } from "../../shared/api/fetchProductById.js";

const sizesArray = ["42", "44", "46", "48", "50", "52", "54", "56"];

export default function MobileProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductsById(id);
        setProduct(data);
      } catch (error) {
        console.error("Ошибка при загрузке товара:", error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.heading}>
        <ol className={styles["breadcrumb-list"]}>
          <li>
            <Link to="/" className={styles.previous}>
              Каталог
            </Link>
          </li>
          <li className={styles.previous}>&gt;</li>
          <li className={styles.current}>{product.title}</li>
        </ol>
      </nav>
      <div className={styles["image-wrapper"]}>
        <img className={styles.image} src={product.images[0]} />
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1.4rem",
          width: "100%",
          marginBottom: "1.2rem",
        }}
      >
        <hr className={styles.line}></hr>
        <hr className={styles.line}></hr>
      </div>
      <div className={styles.details}>
        <h1 className={styles["product-name"]}>{product.title}</h1>
        <div className={styles.price}>{product.price * 100} р</div>
        <div className={styles["sizes-wrapper"]}>
          <h2 className={styles["size-heading"]}>Размер:</h2>
          <ul className={styles["size-array"]}>
            {sizesArray.map((size) => {
              return <li className={styles["size-item"]}>{size}</li>;
            })}
          </ul>
        </div>
        <div className={styles["color-wrapper"]}>
          <h2 className={styles["color-heading"]}>Цвет:</h2>
          <li className={styles["color-item"]}>Розовый</li>
        </div>
        <div className={styles["purchase-wrapper"]}>
          <Button
            text="Добавить в корзину"
            fontColor="var(--button-font-color-details-primary)"
            backgroundColor="var(--button-background-details-color-primary)"
            backgroundHoverColor="var(--button-background-details-color-primary-hover)"
          />
          <button className={styles["add-to-favorites-button-wrapper"]}>
            <img className={styles["add-to-favorites-button"]} src={favorite} />
          </button>
        </div>
        <hr className={styles.line}></hr>
        <div className={styles["description-wrapper"]}>
          <h2 className={styles["description-title"]}>Описание</h2>
          <div className={styles["description-text"]}>
            {product.description}
          </div>
        </div>
        <hr className={styles.line}></hr>
      </div>
    </div>
  );
}
