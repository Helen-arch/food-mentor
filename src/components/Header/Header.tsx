import styles from './Header.module.scss';

type Props = {
  step: number;
};

export const Header: React.FC<Props> = ({ step }) => {
  const dynamicWidth = (step * 20) + '%';

  return (
    <header>
      <div className={styles.contentWrapper}>
        <img alt="logo" />
        <span>Food Mentor</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarIndicator}
          style={{ width: dynamicWidth }}
        ></div>
      </div>
    </header>
  );
};