import styles from './Category.module.css'

export default function Category(props) {
    return (
        <div className={styles.category}>
            {props.categoryName}
        </div>
    )
}