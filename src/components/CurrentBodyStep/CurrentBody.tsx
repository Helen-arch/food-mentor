type Props = {
  next: () => void;
};

export const CurrentBodyStep: React.FC<Props> = ({ next }) => {
  return (
    <button onClick={next}>Next</button>
  );
};