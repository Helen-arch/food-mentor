type Props = {
  handleStep: () => void;
};

export const BehaviorsStep: React.FC<Props> = ({ handleStep }) => {
  return (
    <button onClick={handleStep}>Behaviors</button>
  );
};