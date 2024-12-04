import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../features/hooks";
import { setFractalPieces } from "../../../features/fractalSlice";
import { HexAlphaColorPicker } from "react-colorful";
import { setOverlayBgColor } from "../../../features/meshSlice";

function FractalSettings() {
  const dispatch = useAppDispatch();
  const [pieces, setPieces] = useState(20);
  const [colorPicker, setColorPicker] = useState("#000000b3");

  const handleResetPieces = () => {
    setPieces(20);
  };

  const handleResetOverlay = () => {
    setColorPicker("000000b3");
  };

  useEffect(() => {
    dispatch(setFractalPieces(pieces));
  }, [dispatch, pieces]);

  useEffect(() => {
    dispatch(setOverlayBgColor(colorPicker));
  }, [colorPicker]);

  return (
    <div className="flex flex-col gap-4 w-full border p-4 rounded-lg mt-4">
      <label>Numero </label>
      <div className="flex gap-2 items-center">
        <input
          type="range"
          className="range range-sm"
          aria-label="range"
          min="1"
          max="50"
          value={pieces}
          onChange={(e) => setPieces(parseInt(e.target.value))}
        />
        <span
          className="icon-[solar--refresh-circle-line-duotone] size-8 hover:bg-primary"
          onClick={handleResetPieces}
        />
      </div>

      <div className="flex justify-between">
        <label className="text-md font-medium">Overlay</label>
        <span
          className="icon-[solar--refresh-circle-line-duotone] size-8 hover:bg-primary"
          onClick={handleResetOverlay}
        />
      </div>

      <div className="flex gap-2 items-start">
        <HexAlphaColorPicker color={colorPicker} onChange={setColorPicker} />
      </div>
    </div>
  );
}

export default FractalSettings;
