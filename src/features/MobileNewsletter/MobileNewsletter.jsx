import styles from './MobileNewsletter.module.css'
import Button from "../../components/Button/Button.jsx";

export default function MobileNewsletter() {
    return (
        <div className={styles.container}>
            <form>
                <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Введите e-mail" required/>
                </label>

                <label>
                    <span>Имя</span>
                    <input type="text" name="name" placeholder="Введите имя" required/>
                </label>
                <Button
                    type="submit"
                    text="Подписаться"
                    fontColor="var(--button-font-color-details-primary)"
                    backgroundColor="var(--button-background-details-color-primary)"
                    backgroundHoverColor="var(--button-background-details-color-primary-hover)"
                />
                <hr style={{marginTop: '1.6rem'}} className={styles.line}></hr>
                <hr className={styles.line}></hr>
            </form>

        </div>
    )
}