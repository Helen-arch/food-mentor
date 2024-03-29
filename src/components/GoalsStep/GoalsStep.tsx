import styles from './GoalsStep.module.scss';
import female1 from '../../static/images/female1.png';
import female2 from '../../static/images/female2.png';
import female3 from '../../static/images/female3.png';
import female4 from '../../static/images/female4.png';
import { Card } from '../Card';
import { Quiz } from '../../types/Quiz';
import { quizData } from '../../utils/quizData';
import { useState } from 'react';

type Props = {
  handleStep: (key: Quiz, value: any) => void;
};

const goals = [
  { title: 'Lose\nWeight', value: 'lose weight', src: female1 },
  { title: 'Gain\nMuscle', value: 'gain muscle', src: female2 },
  { title: 'Develop\nhealthy\nhabits', value: 'develop healthy habits1', src: female3 },
  { title: 'Develop\nhealthy\nhabits', value: 'develop healthy habits2', src: female4 },
];

export const GoalsStep: React.FC<Props> = ({ handleStep }) => {
  const [goal, setGoal] = useState(quizData.goal);

  return (
    <main className={styles.goals}>
      <div className={styles.titles}>
        <h1 className={styles.mainTitle}>The Goal</h1>
        <h3 className={styles.subtitle}>Focus on the health benefits you need.</h3>
        <h3 className={styles.subtitle}>Balanced nutrition will let you achieve them</h3>
      </div>

      
      <div className={styles.cardsContainer}>
        <h2 className={styles.goalsTitle}>What are your goals?</h2>
        {goals.map(({ title, src, value}) => {
          const selected = goal === value;

          return (
            <Card
              key={src}
              title={title}
              src={src}
              onClick={() => {
                setGoal(value);
                handleStep(Quiz.Goals, value);
              }}
              leftImgStyles={styles.leftImg}
              singleSelectedCard={styles.singleSelectedCardStyles}
              titleStyles={styles.cardTitle}
              isSelected={selected}
            />
          );
        })}
      </div>
    </main>
  );
};