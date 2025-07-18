import styles from '../CardsList/CardList.module.css'
import {useSelector} from "react-redux";
import CardListItem from '../CardListItem/CardListItem.jsx'

export default function CardsList() {
    const products = useSelector((state) => state.content.products)

    return (
        <div className={styles.container}>
            {
                products.length > 0 ?
                    (products.map((product) => (
                        <CardListItem key={product.id} title={product.title} tag='NEW' price={product.price}
                                      sizes={['42-44', '46-48', '50-52', '54-56']} color='Бордовый'
                                      image={product.images[0]}/>
                    )))
                    :
                    (<div>Загрузка...</div>)

            }
        </div>
    )
}