import { ButtonProps } from "./Button.d";

const Button = ({ label, type = "button", onClick }: ButtonProps) => {
  return (
    <button
      className="min-w-28 py-2.5 rounded-md text-sm bg-blue-500 font-semibold text-white hover:bg-opacity-90 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-300 transition-all duration-300 ease-in-out"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
