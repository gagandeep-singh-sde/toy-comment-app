import { IconBaseProps } from "react-icons";

export type ActionWithConfirmationProps = {
  Icon: React.ComponentType<IconBaseProps>;
  ConfirmActionIcon: React.ComponentType<IconBaseProps>;
  ConfirmActionMessage: string;
  onClick: () => void;
};
