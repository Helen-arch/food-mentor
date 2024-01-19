import styles from './Header.module.scss';
import arrowBack from '../../static/icons/back.svg';
import logo from '../../static/icons/logo.svg';

type Props = {
  prev: () => void;
};

export const Header: React.FC<Props> = ({ prev }) => {
  return (
    <header>
      <div className={styles.contentWrapper}>
        <img
          role='button'
          src={arrowBack}
          className={styles.back}
          alt='back'
          onClick={prev}
        />
        
        <img src={logo} alt="logo" />
        <span className={styles.headerTitle}>Food Mentor</span>
      </div>
    </header>
  );
};