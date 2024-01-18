import classNames from 'classnames';
import { Behaviors } from '../../types/Behaviors';
import { Quiz } from '../../types/Quiz';
import styles from './Card.module.scss';

type Props = {
  handleStep?: (key: Quiz, value: any) => void;
  handleSelect?: (value: Behaviors) => void;
  leftImgStyles?: string;
  rightImgStyles?: string;
  singleSelectedCard?: string;
  titleStyles: string;
  title: string;
  src: string;
  value: string;
};

export const Card: React.FC<Props> = ({
  handleStep,
  handleSelect,
  leftImgStyles,
  rightImgStyles,
  singleSelectedCard,
  titleStyles,
  title,
  src,
  value,
}) => {
  const cardStyles = classNames(styles.goalCard, singleSelectedCard);
  const titleClassName = classNames(styles.cardTitle, titleStyles);

  return (
    <article
      role='button'
      className={cardStyles}
      onClick={() => {
        if (handleStep) {
          handleStep(Quiz.Goals, value);
        } else if (handleSelect) {
          handleSelect(value as Behaviors);
        }
      }}
    >
      <img src={src} alt="icon" className={leftImgStyles} />
      <div className={titleClassName}>{title}</div>
      <img src={src} alt="female" className={rightImgStyles} />
    </article>
  );
};