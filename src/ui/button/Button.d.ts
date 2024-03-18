type BaseButtonProps = {
  label: string;
};

type ButtonProps = BaseButtonProps &
  (
    | {
        type?: "button";
        onClick: () => void;
      }
    | {
        type: "submit";
      }
  );
