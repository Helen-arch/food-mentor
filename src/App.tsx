import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header';
import { Step } from './types/Step';
import { GoalsStep } from './components/GoalsStep';
import { MeasuresStep } from './components/MeasuresStep';
import { BehaviorsStep } from './components/BehaviorsStep';
import { ActivityStep } from './components/ActivityStep';

const StepComponents = {
  [Step.Goals]: GoalsStep,
  [Step.Measures]: MeasuresStep,
  [Step.Behaviors]: BehaviorsStep,
  [Step.Activity]: ActivityStep,
};

function App() {
  const [step, setStep] = useState(Step.Goals);

  const next = () => {
    if (step !== Step.Activity) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const prev = () => {
    if (step !== Step.Goals) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const StepComponent = StepComponents[step];

  return (
    <div className={styles.app}>
      <Header prev={prev} />
      <StepComponent next={next} />
    </div>
  );
}

export default App;