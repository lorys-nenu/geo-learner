"use client"
import { useEffect, useRef } from "react";
import RadioCard from "./RadioCard";
import useKeyPress from "@/hooks/useKeyPressed";
import useNumPad from "@/hooks/useNumpad";

export type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
};

export type RadioOption = {
  value: string;
  children: React.ReactNode;
};

export default function RadioGroup({ name, options, value, onChange, ...props }: RadioGroupProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const numPadPressed = useNumPad();

  useEffect(() => {
    refs.current = refs.current.slice(0, options.length);
  }
  , [options]);

  useEffect(() => {
    for (const [key, isPressed] of Object.entries(numPadPressed)) {
      if (isPressed) {
        const index = parseInt(key) - 1;
        if (refs.current[index]) {
          refs.current[index].click();
        }
      }
    }
  }, [numPadPressed]);

  console.log(numPadPressed);

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <RadioCard
          name={name}
          value={option.value}
          key={option.value}
          checked={option.value === value}
          onChange={() => onChange(option.value)}
          inputRef={(el) => {
            refs.current[options.indexOf(option)] = el;
          }}
          {...props}
        >
          {option.children}
        </RadioCard>
      ))}
    </div>
  );
}
    