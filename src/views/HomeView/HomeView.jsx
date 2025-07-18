import styles from './HomeView.module.css'
import {fetchProducts} from "../../shared/api/fetchProducts.js";
import {useDispatch} from "react-redux";
import {setProducts} from "../../features/Content/ContentSlice.js";
import {useEffect} from "react";
import CategoriesList from "../../features/CategoriesList/CategoriesList.jsx";
import Header from "../../features/Header/Header.jsx";
import Content from "../../features/Content/Content.jsx";

export default function HomeView() {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "MOD LAV | HOME";

        async function fetch() {
            const response = await fetchProducts(0, 20)
            // console.log(response)
            dispatch(setProducts(response))
        }

        fetch()
    }, [dispatch])

    return (
        <div className={styles.container}>
            <CategoriesList/>
            <Header/>
            <Content/>
        </div>
    )
}