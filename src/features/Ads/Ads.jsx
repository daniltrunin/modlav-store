import styles from "./Ads.module.css";

export default function Ads() {
  return (
    <aside className={styles.container}>
      <p className={styles["advertisment-text"]}>
        <span>подписывайся</span> на рассылку и <span>получи доступ</span> к
        секретным <span>распродажам</span> и <span>скидкам</span> до семидесяти
        процентов
      </p>
      <hr className={styles.line}></hr>
    </aside>
  );
}
