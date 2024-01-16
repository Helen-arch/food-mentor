import { useState } from 'react';
import { Header } from './components/Header';
import { Step } from './types/Step';
import { GoalStep } from './components/GoalStep';
import { GenderStep } from './components/GenderStep';
import { CurrentBodyStep } from './components/CurrentBodyStep';
import { ActivityStep } from './components/ActivityStep';
import { EmailStep } from './components/EmailStep';

const StepComponents = {
  [Step.Gender]: GenderStep,
  [Step.Goal]: GoalStep,
  [Step.CurrentBody]: CurrentBodyStep,
  [Step.Activity]: ActivityStep,
  [Step.Email]: EmailStep,
};

function App() {
  const [step, setStep] = useState(Step.Gender);

  const next = () => {
    setStep(prevStep => prevStep + 1);
  };

  const StepComponent = StepComponents[step];

  return (
    <div>
      <Header step={step} />
      <StepComponent next={next} />
    </div>
  );
}

export default App;