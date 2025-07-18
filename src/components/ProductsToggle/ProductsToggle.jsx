import styles from './ProductsToggle.module.css'

export default function ProductsToggle(props) {
    return (
        <div className={styles.container}>
            <label className={styles.switch}>
                <input type="checkbox"/>
                <span className={styles.move}></span>
            </label>
            <div className={styles['toggle-name']}>{props.toggleName}</div>
        </div>

    )
}