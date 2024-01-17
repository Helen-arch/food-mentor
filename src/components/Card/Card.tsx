import { Behaviors } from '../../types/Behaviors';
import { Quiz } from '../../types/Quiz';
import styles from './Card.module.scss';

type Props = {
  handleStep?: (key: Quiz, value: any) => void;
  handleSelect?: (value: Behaviors) => void;
  title: string;
  src: string;
  value: string;
};

export const Card: React.FC<Props> = ({
  handleStep,
  handleSelect,
  title,
  src,
  value,
}) => {
  return (
    <article
      role='button'
      className={styles.goalCard}
      onClick={() => {
        if (handleStep) {
          handleStep(Quiz.Goals, value);
        } else if (handleSelect) {
          handleSelect(value as Behaviors);
        }
      }}
    >
      <div className={styles.cardTitle}>{title}</div>
      <img src={src} alt="female"/>
    </article>
  );
};