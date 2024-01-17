type Props = {
  next: () => void;
};

export const GoalsStep: React.FC<Props> = ({ next }) => {
  return (
    <button onClick={next}>Goals</button>
  );
};