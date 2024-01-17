type Props = {
  next: () => void;
};

export const ActivityStep: React.FC<Props> = ({ next }) => {
  return (
    <button onClick={next}>Activity</button>
  );
};