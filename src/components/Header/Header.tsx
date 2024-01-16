import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header>
      <div className={styles.contentWrapper}>
        <img alt="logo" />
        <h3>Food Mentor</h3>
      </div>
      <div>
        <div></div>
      </div>
    </header>
  );
};