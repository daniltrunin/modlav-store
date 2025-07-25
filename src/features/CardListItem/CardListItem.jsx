import styles from "./CardListItem.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../Header/HeaderSlice.js";
import favorites from "../../assets/icons/FavoritesButton.svg";

export default function CardListItem({
  id,
  title,
  tag,
  price,
  sizes,
  color,
  image,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
    dispatch(toggleFavorite(!isActive));
  };

  const handleCardClick = () => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <div className={styles["image-wrapper"]}>
        <img className={styles.image} src={image} alt="Изображение товара" />
        <img
          onClick={(e) => handleFavoriteClick(e)}
          className={`${styles["favorites-button"]} ${
            isActive ? styles.active : ""
          }`}
          src={favorites}
          alt="Иконка добавить в избранное"
        />
      </div>

      <div className={styles.details}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles["price-wrapper"]}>
            {tag ? <div className={styles.tag}>{tag}</div> : ""}
            <div>{price * 100} р.</div>
          </div>
        </div>

        <div className={styles["size-wrapper"]}>
          <span className={styles["size-wrapper__name"]}>Размер:</span>
          <span className={styles["size-wrapper__list"]}>
            {sizes.join(", ")}
          </span>
        </div>

        <div className={styles["color-wrapper"]}>
          <span>Цвет:</span> {color}
        </div>
      </div>
    </div>
  );
}
