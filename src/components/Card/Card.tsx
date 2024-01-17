import styles from './Card.module.scss';

type Props = {
  handleStep: () => void;
  title: string;
  src: string;
  value: string;
};

export const Card: React.FC<Props> = ({ handleStep, title, src }) => {
  return (
    <article role='button' className={styles.goalCard} onClick={() => handleStep('goals', value)}>
      <div className={styles.cardTitle}>{title}</div>
      <img src={src} alt="female"/>
    </article>
  );
};