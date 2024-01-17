import { Quiz } from "../../types/Quiz";

type Props = {
  handleStep: (key: Quiz, value: any) => void;
};

export const ActivityStep: React.FC<Props> = ({ handleStep }) => {
  return (
    <button onClick={() => handleStep}>Activity</button>
  );
};