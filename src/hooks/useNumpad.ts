import {useState, useEffect} from "react"
const useNumPad = () => {
  const [numpadPressed, setNumpadPressed] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });

  const downHandler = ({ key }: { key: any }) => {
    if (key === "1" || key === "&") setNumpadPressed({ ...numpadPressed, 1: true });
    if (key === "2" || key === "é") setNumpadPressed({ ...numpadPressed, 2: true });
    if (key === "3" || key === `"`) setNumpadPressed({ ...numpadPressed, 3: true });
    if (key === "4" || key === `'`) setNumpadPressed({ ...numpadPressed, 4: true });
    if (key === "5" || key === "(") setNumpadPressed({ ...numpadPressed, 5: true });
    if (key === "6" || key === "§") setNumpadPressed({ ...numpadPressed, 6: true });
    if (key === "7" || key === "è") setNumpadPressed({ ...numpadPressed, 7: true });
    if (key === "8" || key === "!") setNumpadPressed({ ...numpadPressed, 8: true });
    if (key === "9" || key === "ç") setNumpadPressed({ ...numpadPressed, 9: true });
    if (key === "0" || key === "à") setNumpadPressed({ ...numpadPressed, 10: true });
  };

  const upHandler = ({ key }: { key: any }) => {
    if (key === "1" || key === "&") setNumpadPressed({ ...numpadPressed, 1: false });
    if (key === "2" || key === "é") setNumpadPressed({ ...numpadPressed, 2: false });
    if (key === "3" || key === `"`) setNumpadPressed({ ...numpadPressed, 3: false });
    if (key === "4" || key === `'`) setNumpadPressed({ ...numpadPressed, 4: false });
    if (key === "5" || key === "(") setNumpadPressed({ ...numpadPressed, 5: false });
    if (key === "6" || key === "§") setNumpadPressed({ ...numpadPressed, 6: false });
    if (key === "7" || key === "è") setNumpadPressed({ ...numpadPressed, 7: false });
    if (key === "8" || key === "!") setNumpadPressed({ ...numpadPressed, 8: false });
    if (key === "9" || key === "ç") setNumpadPressed({ ...numpadPressed, 9: false });
    if (key === "0" || key === "à") setNumpadPressed({ ...numpadPressed, 10: false });
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return numpadPressed;
}

export default useNumPad;