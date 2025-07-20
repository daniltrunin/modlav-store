import styles from "./ProductsToggles.module.css";
import ProductsToggle from "../../components/ProductsToggle/ProductsToggle.jsx";

export default function ProductsToggles() {
  return (
    <ul className={styles.container}>
      <li>
        <ProductsToggle toggleName="Новинки" />
      </li>
      <li>
        <ProductsToggle toggleName="Хиты продаж" />
      </li>
      <li>
        <ProductsToggle toggleName="Распродажа" />
      </li>
    </ul>
  );
}
