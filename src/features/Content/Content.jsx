import styles from "./Content.module.css";
import ProductsToggles from "../ProductsToggles/ProductsToggles.jsx";
import ProductsFilters from "../ProductsFilters/ProductsFilters.jsx";
import CardsList from "../CardsList/CardsList.jsx";

export default function Content() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <ProductsToggles />
        <ProductsFilters />
      </div>
      <CardsList />
    </main>
  );
}
