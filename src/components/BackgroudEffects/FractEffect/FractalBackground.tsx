import React, { FC } from "react";
import { useAppSelector } from "../../../features/hooks";
import FractalPices from "./FractalPices";

interface FractalBackgroundProps {
  children: React.ReactNode;
}

const FractalBackground: FC<FractalBackgroundProps> = ({ children }) => {
  const totalPieces = useAppSelector((state) => state.fractal.numberPices);

  return (
    <div id="print" className="flex w-full h-full relative z-0 gap-0 p-0  ">
      {/* Sfondo con pezzi frazionati */}
      <FractalPices pieces={totalPieces} />

      {/* Contenuto principale */}
      <div className="flex justify-center items-center w-full h-full absolute  ">
        {children}
      </div>
    </div>
  );
};

export default FractalBackground;
