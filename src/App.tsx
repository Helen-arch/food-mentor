import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <input style={{ pointerEvents: 'none' }} type='range' min={0} max={10} value={5}/>
    </div>
  );
}

export default App;


// const GOAL = 0;
// const BODY_TYPE = 1;
// const WORKOUT = 2;
// const EMAIL = 5;

// const Step = {
//   GOAL,
//   BODY_TYPE,
//   WORKOUT,
// };

// const GoalStep = ({ prop1, next }) => {
//   useEffect(() => {
//     if (!prop1) {
//       next();
//     }
//   }, [prop1]);


//   return ...
// };

// const StepComponents = {
//   [Step.GOAL]: GoalStep,
//   [Step.BODY_TYPE]: BodyTypeStep,
//   [Step.WORKOUT]: WorkoutStep,
// };

// const App = () => {
//   const [step, setStep] = useState(Step.GOAL);

//   const next = () => {
//     setStep(prevStep => prevStep + 1);
//   };

//   const StepComponent = StepComponents[step];

//   return <StepComponent next={next} />
// };