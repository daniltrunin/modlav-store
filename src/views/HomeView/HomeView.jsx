import styles from './HomeView.module.css'
import {fetchProducts} from "../../shared/api/fetchProducts.js";
import {useDispatch, useSelector} from "react-redux";
import {setProducts, addProducts, setOffset} from "../../features/Content/ContentSlice.js";
import {useEffect, useRef} from "react";
import CategoriesList from "../../features/CategoriesList/CategoriesList.jsx";
import Header from "../../features/Header/Header.jsx";
import Content from "../../features/Content/Content.jsx";

export default function HomeView() {
    const dispatch = useDispatch();
    const offset = useSelector((state) => state.content.offset)
    const loading = useRef(false)
    const offsetRef = useRef(offset)

    offsetRef.current = offset

    useEffect(() => {
        document.title = "MOD LAV | HOME";

        async function fetchInitial() {
            const response = await fetchProducts({offset: 0, limit: 20});
            dispatch(setProducts(response))
            dispatch(setOffset(20))
        }

        fetchInitial()
    }, [dispatch])

    useEffect(() => {
        const handleScroll = async () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
            ) {
                if (!loading.current) {
                    loading.current = true;
                    await loadMore();
                    loading.current = false;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    async function loadMore() {
        const response = await fetchProducts({
            offset: offsetRef.current,
            limit: 20,
        });
        dispatch(addProducts(response));
        dispatch(setOffset(offsetRef.current + 20));
    }

    return (
        <div className={styles.container}>
            <CategoriesList/>
            <Header/>
            <Content/>
        </div>
    )
}