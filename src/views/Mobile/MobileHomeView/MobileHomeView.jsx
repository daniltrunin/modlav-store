import styles from './MobileHomeView.module.css'
import MobileHeader from '../../../features/Header/MobileHeader.jsx';
import ProductsToggles from "../../../features/ProductsToggles/ProductsToggles.jsx";
import ProductsFilters from "../../../features/ProductsFilters/ProductsFilters.jsx";
import CardsList from "../../../features/CardsList/CardsList.jsx";

// Сделать grid на мобилку в как десктопе +-

export default function MobileHomeView() {
    return (
        <div className={styles.container}>
            <MobileHeader/>
            <ProductsToggles/>
            <ProductsFilters/>
            <CardsList/>
        </div>
    )
}