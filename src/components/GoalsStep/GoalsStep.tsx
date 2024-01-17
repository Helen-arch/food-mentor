import styles from './GoalsStep.module.scss';
import female1 from '../../static/images/female1.png';
import female2 from '../../static/images/female2.png';
import female3 from '../../static/images/female3.png';
import female4 from '../../static/images/female4.png';
import { Card } from '../Card';

type Props = {
  handleStep: () => void;
};

const goals = [
  { title: 'Lose\nWeight', value: 'lose weight', src: female1 },
  { title: 'Gain\nMuscle', value: 'gain muscle', src: female2 },
  { title: 'Develop\nhealthy\nhabits', value: 'develop healthy habits', src: female3 },
  { title: 'Develop\nhealthy\nhabits', value: 'develop healthy habits', src: female4 },
];

export const GoalsStep: React.FC<Props> = ({ handleStep }) => {
  return (
    <main>
      <section className={styles.goalsSection}>
        <div className={styles.titles}>
          <h1 className={styles.mainTitle}>The Goal</h1>
          <h3 className={styles.subtitle}>Focus on the health benefits you need.</h3>
          <h3 className={styles.subtitle}>Balanced nutrition will let you achieve them</h3>
        </div>

        <h2 className={styles.goalsTitle}>What are your goals?</h2>
        <div className={styles.cardsContainer}>
          {goals.map(({ title, src, value}) => {
            return (
              <Card
                key={src}
                title={title}
                src={src}
                value={value}
                handleStep={handleStep}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};