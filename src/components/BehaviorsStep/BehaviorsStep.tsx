import { useState } from 'react';
import styles from './BehaviorsStep.module.scss';
import { Card } from '../Card';
import { Quiz } from "../../types/Quiz";
import { Behaviors } from '../../types/Behaviors';
import moon from '../../static/icons/moon.svg';
import donut from '../../static/icons/donut.svg';
import soda from '../../static/icons/soda.svg';
import salt from '../../static/icons/salt.svg';
import pizza from '../../static/icons/pizza.svg';
import cross from '../../static/icons/cross.svg';
import classNames from 'classnames';
import { quizData } from '../../utils/quizData';

type Props = {
  handleStep: (key: Quiz, value: any) => void;
};

const behaviorsData = [
  { title: `I don't rest\nenough`, value: 'rest' , src: moon },
  { title: 'I have a sweet\ntooth', value: 'sweets' , src: donut },
  { title: 'I have too\nmuch soda', value: 'soda' , src: soda },
  { title: 'I eat many\nsalty foods', value: 'salt' , src: salt },
  { title: 'I enjoy\nmidnight\nsnacks', value: 'snacks' , src: pizza },
  { title: 'None of the\nabove', value: 'none' , src: cross },
];

export const BehaviorsStep: React.FC<Props> = ({ handleStep }) => {
  const [behaviors, setBehaviors] = useState<Behaviors[]>(quizData.behaviors);

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
            const multiSelect = behaviors.includes(value as Behaviors);

            return (
              <Card
                key={src}
                title={title}
                src={src}
                onClick={() => handleSelect(value as Behaviors)}
                rightImgStyles={styles.rightImg}
                leftImgStyles={styles.leftImg}
                titleStyles={styles.titleCard}
                isSelected={multiSelect}
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