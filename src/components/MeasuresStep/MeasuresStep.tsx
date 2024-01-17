type Props = {
  handleStep: () => void;
};

export const MeasuresStep: React.FC<Props> = ({ handleStep }) => {
  return (
    <button onClick={handleStep}>Measures</button>
  );
};