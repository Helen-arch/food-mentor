import classNames from 'classnames';
import styles from './Card.module.scss';

type Props = {
  onClick: () => void;
  leftImgStyles?: string;
  rightImgStyles?: string;
  singleSelectedCard?: string;
  activityCard?: string;
  isSelected: boolean;
  titleStyles: string;
  title: string;
  src?: string;
};

export const Card: React.FC<Props> = ({
  onClick,
  leftImgStyles,
  rightImgStyles,
  singleSelectedCard,
  activityCard,
  isSelected,
  titleStyles,
  title,
  src,
}) => {
  const cardStyles = classNames(styles.card, activityCard, singleSelectedCard, {
    [styles.selectedCard]: isSelected,
  });
  const titleClassName = classNames(styles.cardTitle, titleStyles);

  return (
    <article
      role='button'
      className={cardStyles}
      onClick={onClick}
    >
      <img src={src} alt="icon" className={leftImgStyles} />
      <div className={titleClassName}>{title}</div>
      <img src={src} alt="female" className={rightImgStyles} />
    </article>
  );
};