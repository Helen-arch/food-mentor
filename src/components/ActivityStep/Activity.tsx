type Props = {
  handleStep: () => void;
};

export const ActivityStep: React.FC<Props> = ({ handleStep }) => {
  return (
    <button onClick={handleStep}>Activity</button>
  );
};