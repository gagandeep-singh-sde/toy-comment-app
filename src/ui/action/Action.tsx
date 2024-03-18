import { ActionProps } from "./Action.d";

const Action = ({ Icon, onClick }: ActionProps) => {
  return (
    <div
      onClick={onClick}
      className="p-1.5 w-fit rounded-2xl transition-all duration-300 ease-in-out text-blue-500 cursor-pointer hover:bg-blue-500 hover:bg-opacity-15 "
    >
      <Icon />
    </div>
  );
};
export default Action;
