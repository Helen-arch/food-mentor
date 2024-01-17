import { Quiz } from '../../types/Quiz';
import styles from './Card.module.scss';

type Props = {
  handleStep: (key: Quiz, value: any) => void;
  title: string;
  src: string;
  value: string;
};

export const Card: React.FC<Props> = ({ handleStep, title, src, value }) => {
  return (
    <article
      role='button'
      className={styles.goalCard}
      onClick={() => {
        handleStep(Quiz.Goals, value);
      }}
    >
      <div className={styles.cardTitle}>{title}</div>
      <img src={src} alt="female"/>
    </article>
  );
};