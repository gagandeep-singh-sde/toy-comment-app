import { IconBaseProps } from "react-icons";

export type ActionProps = {
  Icon: React.ComponentType<IconBaseProps>;
  onClick: () => void;
};
