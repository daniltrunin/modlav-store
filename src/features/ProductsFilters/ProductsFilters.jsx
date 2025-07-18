import styles from './ProductsFilters.module.css';
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter.jsx";

const sizes = ["XS", "S", "M", "L", "XL"]
const colors = ["Белый", "Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", 'Синий', 'Фиолетовый']
const sort = ['По популярности', 'По дате', 'По цене']

export default function ProductsFilters() {
    return (
        <div className={styles.container}>
            <ProductsFilter filterName='Размер' filterPlaceholder='Все размеры' optionsArray={sizes}/>
            <ProductsFilter filterName='Цвет' filterPlaceholder='Все цвета' optionsArray={colors}/>
            <ProductsFilter filterName='Сортировать' filterPlaceholder='По популярности' optionsArray={sort}/>
        </div>
    )
}