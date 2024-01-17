import { useState } from 'react';
import classNames from 'classnames';
import styles from './MeasuresStep.module.scss';
import { Quiz } from "../../types/Quiz";
import { System } from '../../types/System';

type Props = {
  handleStep: (key: Quiz, value: any) => void;
};

export const MeasuresStep: React.FC<Props> = ({ handleStep }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [system, setSystem] = useState(System.Imperial);

  const heightUnits = system === System.Imperial ? 'ft' : 'm';
  const weightUnits = system === System.Imperial ? 'ft' : 'kg';

  return (
    <main className={styles.measures}>
      <div className={styles.titles}>
        <h1 className={styles.mainTitle}>Measure Yourself</h1>
        <h3 className={styles.subtitle}>What are your height and body weight? </h3>
      </div>

      <form
        onSubmit={() => handleStep(Quiz.Measures, { height, weight, system })}
      >
        <div
          role='tab'
          className={classNames(styles.imperial, {
            [styles.activeTab]: system === System.Imperial,
          })}
          onClick={() => setSystem(System.Imperial)}
        >
          IMPERIAL
        </div>
        <div
          role='tab'
          className={classNames(styles.metric, {
            [styles.activeTab]: system === System.Metric,
          })}
          onClick={() => setSystem(System.Metric)}
        >
          METRIC
        </div>

        <input
          value={height}
          placeholder={`Height(${heightUnits})`}
          className={styles.measureInput}
          onChange={(event) => setHeight(event.target.value.replace(/[^0-9.,]/g, ''))}
        />
        <input
          value={weight}
          placeholder={`Current Weight(${weightUnits})`}
          className={styles.measureInput}
          onChange={(event) => setWeight(event.target.value.replace(/[^0-9.,]/g, ''))}
        />

        <button
          disabled={!height || !weight}
          type='submit'
          className={styles.submitButton}
        >
          Continue
        </button>
      </form>
    </main>
  );
};