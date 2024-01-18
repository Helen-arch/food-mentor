import styles from './Activity.module.scss';
import { Quiz } from "../../types/Quiz";
import { useState } from 'react';
import { quizData } from '../../utils/quizData';
import { Card } from '../Card';
import active from '../../static/images/active_girl.png';
import { Modal } from '../Modal';

type Props = {
  handleStep: (key: Quiz, value: any) => void;
};

const activities = [
  { title: 'Hardly at all', value: 'none' },
  { title: 'Fitness 1-2\ntimes a week', value: '1-2' },
  { title: 'Fitness 3-5\ntimes a week', value: '3-5' },
  { title: 'Fitness 5-7\ntimes a week', value: '5-7' },
];

export const ActivityStep: React.FC<Props> = ({ handleStep }) => {
  const [activity, setActivity] = useState(quizData.activity);
  const [isModal, setIsModal] = useState(false);

  const handleSaveQuiz = (value: string) => {
    setActivity(value);
    handleStep(Quiz.Activity, value);
    setIsModal(true);
  };

  return (
    <main className={styles.activity}>
      <div className={styles.titles}>
        <h1 className={styles.mainTitle}>Physical exercise</h1>
        <h3 className={styles.subtitle}>Physical exercise means a lot for a woman who </h3>
        <h3 className={styles.subtitle}>wants to lose kilos and works at the office</h3>
      </div>

      <h2 className={styles.activityTitle}>How active are you during the day?</h2>

      <div className={styles.cardsContainer}>
        <img alt='female'src={active} />

        {activities.map(({ title, value }) => {
          const selected = activity === value;

          return (
            <Card
              key={value}
              title={title}
              onClick={() => handleSaveQuiz(value)}
              leftImgStyles={styles.img}
              rightImgStyles={styles.img}
              titleStyles={styles.cardTitle}
              activityCard={styles.activity}
              isSelected={selected}
            />
          );
        })}
      </div>

      {isModal && <Modal onClose={() => setIsModal(false)} />}
    </main>
  );
};