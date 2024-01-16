type Props = {
  next: () => void;
};

export const EmailStep: React.FC<Props> = ({ next }) => {
  return (
    <button onClick={next}>Next</button>
  );
};