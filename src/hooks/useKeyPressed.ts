import { useState, useEffect } from "react";

const useKeyPress = (targetKey: any) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }: {key: any}) => {
    if (key === targetKey) setKeyPressed(true);
  };

  const upHandler = ({ key }: {key: any}) => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;