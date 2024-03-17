import { ActionProps } from "./Action.d";

const Action = ({ Icon, onClick }: ActionProps) => {
  return (
    <div onClick={onClick} className="text-blue-500 cursor-pointer">
      <Icon />
    </div>
  );
};
export default Action;
