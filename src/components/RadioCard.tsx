import { useState } from "react";
import { setEffect } from "../features/effectSlice";
import { useAppDispatch } from "../features/hooks";

function RadioCard() {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<"Mesh" | "Fractal">("Mesh");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as "Mesh" | "Fractal";
    setSelected(value); // Aggiorna lo stato locale
    dispatch(setEffect(value)); // Notifica il cambiamento immediatamente
  };

  return (
    <>
      <div className="join drop-shadow">
        <input
          className="join-item btn"
          type="radio"
          name="radio-15"
          aria-label="Mesh"
          value="Mesh"
          checked={selected === "Mesh"}
          onChange={handleChange}
        />
        <input
          className="join-item btn"
          type="radio"
          name="radio-15"
          value="Fractal"
          aria-label="Fractal"
          onChange={handleChange}
          checked={selected === "Fractal"}
        />
      </div>
    </>
  );
}

export default RadioCard;
