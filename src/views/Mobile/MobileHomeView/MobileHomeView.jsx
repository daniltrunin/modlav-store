import styles from './MobileHomeView.module.css'
import {fetchProducts} from "../../../shared/api/fetchProducts.js";
import {useDispatch, useSelector} from "react-redux";
import {setProducts, addProducts, setOffset} from "../../../features/Content/ContentSlice.js";
import {useEffect, useRef} from "react";
import MobileHeader from '../../../features/Header/MobileHeader.jsx';
import ProductsToggles from "../../../features/ProductsToggles/ProductsToggles.jsx";
import ProductsFilters from "../../../features/ProductsFilters/ProductsFilters.jsx";
import CardsList from "../../../features/CardsList/CardsList.jsx";

export default function MobileHomeView() {
    const dispatch = useDispatch();
    const offset = useSelector((state) => state.content.offset);
    const loading = useRef(false);
    const containerRef = useRef(null);
    const LIMIT = 10;

    useEffect(() => {
        document.title = "MOD LAV | HOME";

        async function fetchInitial() {
            const response = await fetchProducts({offset: 0, limit: LIMIT});
            dispatch(setProducts(response));
            dispatch(setOffset(LIMIT));
        }

        fetchInitial();
    }, [dispatch]);

    useEffect(() => {
        const handleScroll = async () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const isAtBottom = rect.bottom <= window.innerHeight + 100;

            if (isAtBottom && !loading.current) {
                loading.current = true;
                await loadMore();
                loading.current = false;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    async function loadMore() {
        const response = await fetchProducts({offset, limit: LIMIT});
        dispatch(addProducts(response));
        dispatch(setOffset(offset + LIMIT));
    }

    return (
        <div ref={containerRef} className={styles.container}>
            <MobileHeader/>
            <ProductsToggles/>
            <ProductsFilters/>
            <CardsList/>
        </div>
    )
}