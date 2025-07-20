import styles from './Button.module.css'

export default function Button(props) {
    return (
        <button
            style={{
                '--button-font-color': props.fontColor,
                '--button-bg-color': props.backgroundColor,
                '--button-bg-hover-color': props.backgroundHoverColor
            }}
            type={props.type || 'button'}
            className={styles.button}
        >
            {props.text}
        </button>
    );
}
