import { useState } from 'react';
import styles from './BehaviorsStep.module.scss';
import { Quiz } from "../../types/Quiz";
import { Behaviors } from '../../types/Behaviors';
import moon from '../../static/icons/moon.svg';
import donut from '../../static/icons/donut.svg';
import soda from '../../static/icons/soda.svg';
import salt from '../../static/icons/salt.svg';
import pizza from '../../static/icons/pizza.svg';
import cross from '../../static/icons/cross.svg';
import { Card } from '../Card';

type Props = {
  handleStep: (key: Quiz, value: any) => void;
};

const behaviorsData = [
  { title: `I don't rest enough`, value: 'rest' , src: moon },
  { title: 'I have a sweet tooth', value: 'sweets' , src: donut },
  { title: 'I have too much soda', value: 'soda' , src: soda },
  { title: 'I eat many salty foods', value: 'salt' , src: salt },
  { title: 'I enjoy midnight snacks', value: 'snacks' , src: pizza },
  { title: 'None of the above', value: 'none' , src: cross },
];

export const BehaviorsStep: React.FC<Props> = ({ handleStep }) => {
  const [behaviors, setBehaviors] = useState<Behaviors[]>([]);

  const handleSelect = (value: Behaviors) => {
    if (behaviors.includes(value)) {
      setBehaviors(behaviors.filter(item => item !== value));
    } else if (value === 'none') {
      setBehaviors(['none']);
    } else if (behaviors.includes('none')) {
      const filtered = behaviors.filter(item => item !== 'none');

      setBehaviors([...filtered, value]);
    } else {
      setBehaviors(prev => [...prev, value]);
    }
  };

  return (
    <main className={styles.behaviors}>
      <div className={styles.titles}>
        <h1 className={styles.mainTitle}>Destructive behaviors</h1>
        <h3 className={styles.subtitle}>We all have them! Which are yours?</h3>
      </div>

      <form
        onSubmit={() => handleStep(Quiz.Behaviors, behaviors)}
      >
        <div className={styles.behaviorsContainer}>
          {behaviorsData.map(({ title, value, src }) => {
            return (
              <Card
                key={src}
                title={title}
                value={value}
                src={src}
                handleSelect={handleSelect}
              />
            );
          })}
        </div>

        <button
          disabled={!behaviors.length}
          type='submit'
          className={styles.submitButton}
        >
          Continue
        </button>
      </form>
    </main>
  );
};