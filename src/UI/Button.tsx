interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        className ?? "bg-slate-200 hover:bg-slate-300 p-2 m-0.5 rounded-full"
      }
      title="test"
    >
      {children}
    </button>
  );
}
