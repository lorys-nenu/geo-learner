export type RadioCardProps = {
  children: React.ReactNode;
  name: string;
  inputRef: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function RadioCard({ children, name, value, inputRef, ...props }: RadioCardProps) {
  return (
  <div className="flex items-center space-x-2">
    <input id={`${name}-${value}`} ref={inputRef} type="radio" name={name} className="sr-only peer" />
    <div className="w-8 h-8 border-2 border-white rounded-full peer-checked:bg-success text-center">{value}</div>
    <div 
      className="border-2 border-white rounded cursor-pointer text-white
              peer-checked:border-success peer-checked:border-4 peer-checked:text-success p-4">
    <label
      htmlFor={`${name}-${value}`}
      >
      {children}
    </label>
      </div>
  </div>
  );
}