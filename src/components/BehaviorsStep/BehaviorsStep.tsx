import { Quiz } from "../../types/Quiz";

type Props = {
  handleStep: (key: Quiz, value: any) => void;
};

export const BehaviorsStep: React.FC<Props> = ({ handleStep }) => {
  return (
    <button onClick={() => handleStep}>Behaviors</button>
  );
};