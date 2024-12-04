import { useEffect, useState } from "react";

import { HexAlphaColorPicker } from "react-colorful";
import { useAppDispatch } from "../../../features/hooks";
import {
  rigeneraMesh,
  setOverlayBgColor,
  setBackgroundOpacity,
  setGrainEffect,
} from "../../../features/meshSlice";

function MeshSetting() {
  const dispatch = useAppDispatch();
  const [darkness, setDarkness] = useState(0);
  const [colorPicker, setColorPicker] = useState("#000000b3");

  const handleRigenra = () => {
    dispatch(rigeneraMesh());
  };

  const handleResetOverlay = () => {
    setColorPicker("000000b3");
  };
  const handleResetDarkness = () => {
    setDarkness(0);
  };

  useEffect(() => {
    dispatch(setOverlayBgColor(colorPicker));
    dispatch(setBackgroundOpacity(darkness));
  }, [colorPicker, darkness]);

  return (
    <div className="flex flex-col gap-4 w-full border p-4 rounded-lg mt-4">
      <div className="flex justify-end">
        <button className="btn" onClick={handleRigenra}>
          Rigenera
        </button>
      </div>
      <div className="flex flex-col gap-4 ">
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
        <div className="flex flex-col gap-2 items-center lg:items-start">
          <div className="flex w-full justify-between">
            <label className="text-md font-medium">Darkness</label>
            <span
              className="icon-[solar--refresh-circle-line-duotone] size-8 hover:bg-primary"
              onClick={handleResetDarkness}
            />
          </div>
          <input
            id="darknessRange"
            type="range"
            className="range range-sm"
            aria-label="range"
            min="0"
            max="100"
            value={darkness}
            onChange={(e) => setDarkness(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox"
            id="grainCheck"
            defaultChecked
            onChange={(e) => dispatch(setGrainEffect(e.target.checked))}
          />
          <label className="label-text text-base" htmlFor="check1">
            Grana
          </label>
        </div>
      </div>
    </div>
  );
}

export default MeshSetting;
