type Props = {
  next: () => void;
};

export const MeasuresStep: React.FC<Props> = ({ next }) => {
  return (
    <button onClick={next}>Measures</button>
  );
};