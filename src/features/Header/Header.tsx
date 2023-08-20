import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.bigLogo}>ARMAGEDDON 2023</div>
      <div>
        <div className={styles.text}>ООО “Команда им. Б. Уиллиса”.</div>
        <div className={styles.text}>Взрываем астероиды с 1998 года.</div>
      </div>
    </header>
  );
}
