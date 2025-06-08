type ButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-lg bg-white px-8 py-2 shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:cursor-pointer hover:shadow-md"
    >
      {label}
    </button>
  );
};
