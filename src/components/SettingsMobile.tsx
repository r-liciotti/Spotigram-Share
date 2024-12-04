import { useAppDispatch, useAppSelector } from "../features/hooks";
import RadioCard from "./RadioCard";
import MeshSetting from "./BackgroudEffects/MeshEffect/MeshSetting";
import { toggleCollapse } from "../features/gridSlice";
import SaveButton from "./SaveButton";
import FractalSettings from "./BackgroudEffects/FractEffect/FractalSettings";
import CercaButton from "./CercaButton";

function SettingsMobile() {
  const dispatch = useAppDispatch();
  const effectValue = useAppSelector((state) => state.effects.effect);
  const collapse = useAppSelector((state) => state.grid.collapse);

  return (
    <>
      <div
        className={`flex flex-col absolute bottom-0  z-50 lg:hidden  w-full gap-2 transition-all duration-500 overflow-hidden
        ${collapse ? "h-3/5" : "h-30"}
      `}
      >
        <div className=" flex  w-full justify-end px-4 gap-2">
          <CercaButton />

          <SaveButton />
        </div>
        <div
          id="settings"
          className="flex flex-col gap-4 h-full w-full z-50 bg-black rounded-t-3xl p-2 overflow-y-scroll"
        >
          <button
            className="flex justify-center"
            onClick={() => dispatch(toggleCollapse())}
          >
            <span
              className={`icon-[solar--upload-twice-square-line-duotone] size-10 transition-all duration-500 delay-300 ${
                collapse ? "rotate-180" : ""
              }`}
            ></span>
          </button>
          <div className="p-2">
            <RadioCard />
          </div>
          <div className="accordion p-2 overflow-scroll">
            <div className="px-5 pb-4">
              {effectValue === "Mesh" && <MeshSetting />}
              {effectValue === "Fractal" && <FractalSettings />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsMobile;
