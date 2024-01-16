type Props = {
  next: () => void;
};

export const GoalStep: React.FC<Props> = ({ next }) => {
  return (
    <button onClick={next}>Next</button>
  );
};