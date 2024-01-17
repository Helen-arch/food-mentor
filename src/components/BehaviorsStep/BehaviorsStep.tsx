type Props = {
  next: () => void;
};

export const BehaviorsStep: React.FC<Props> = ({ next }) => {
  return (
    <button onClick={next}>Behaviors</button>
  );
};