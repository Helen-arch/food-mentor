type Props = {
  next: () => void;
};

export const GenderStep: React.FC<Props> = ({ next }) => {
  return (
    <button onClick={next}>Next</button>
  );
};