import styles from "../CardsList/CardList.module.css";
import { useSelector } from "react-redux";
import CardListItem from "../CardListItem/CardListItem.jsx";

export default function CardsList() {
  const products = useSelector((state) => state.content.products);

  return (
    <ul className={styles.container}>
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id}>
            <CardListItem
              id={product.id}
              title={product.title}
              tag="NEW"
              price={product.price}
              sizes={["42-44", "46-48", "50-52", "54-56"]}
              color="Бордовый"
              image={product.images[0]}
            />
          </li>
        ))
      ) : (
        <div>Загрузка...</div>
      )}
    </ul>
  );
}
