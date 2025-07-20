import styles from './MobileProductSimilar.module.css'
import arrowLeft from '../../assets/icons/Arrow-similar-left.svg'
import arrowRight from '../../assets/icons/Arrow-similar-right.svg'
import image from '../../assets/images/CardListItemPicture.png'
import CardListItem from '../CardListItem/CardListItem.jsx'

export default function MobileProductSimilar(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles['header-title']}>Похожие товары</div>
                <div className={styles['header-buttons']}>
                    <button className={styles['header-button']}>
                        <img src={arrowLeft}/>
                    </button>
                    <button className={styles['header-button']}>
                        <img src={arrowRight}/>
                    </button>
                </div>
            </div>
            <div className={styles.cards}>
                <CardListItem title='Костюм из микровельвета...' price='5 500 р.'
                              sizes={['42-44', '46-48', '50-52', '54-56']} color='Бордовый'
                              image={image}/>
                <CardListItem title='Костюм из микровельвета...' price='5 500 р.'
                              sizes={['42-44', '46-48', '50-52', '54-56']} color='Бордовый'
                              image={image}/>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}