import styles from './CategoriesList.module.css'
import {useSelector} from "react-redux";
import Logo from "../../components/Logo/Logo.jsx";
import Category from "../Category/Category.jsx";

export default function CategoriesList() {
    const categories = useSelector((state) => state.categories.listCategories);
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            {categories.map((category) => (
                <div key={category.id} className={styles.category}>
                    <Category categoryName={category.name}/>
                </div>
            ))}
        </div>
    )
}