import styles from './ProductsToggles.module.css'
import ProductsToggle from "../../components/ProductsToggle/ProductsToggle.jsx";

export default function ProductsToggles() {
    return (
        <div className={styles.container}>
            <ProductsToggle toggleName='Новинки'/>
            <ProductsToggle toggleName='Хиты продаж'/>
            <ProductsToggle toggleName='Распродажа'/>
        </div>
    )
}