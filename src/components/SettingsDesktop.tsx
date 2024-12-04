import { useAppDispatch, useAppSelector } from "../features/hooks";
import MeshSetting from "./BackgroudEffects/MeshEffect/MeshSetting";
import RadioCard from "./RadioCard";
import SaveButton from "./SaveButton";
import { toggleCollapse } from "../features/gridSlice";
import FractalSettings from "./BackgroudEffects/FractEffect/FractalSettings";
import CercaButton from "./CercaButton";

function SettingsDesktop() {
  const dispatch = useAppDispatch();
  const effectValue = useAppSelector((state) => state.effects.effect);
  const collapse = useAppSelector((state) => state.grid.collapse);

  console.log("effectValue", effectValue);

  return (
    <div
      className={`h-full hidden lg:flex flex-col ${
        collapse ? "lg:col-span-1" : "lg:col-span-3"
      } lg:py-6 lg:pl-6 gap-4`}
    >
      <div className="flex justify-end">
        <button className="btn" onClick={() => dispatch(toggleCollapse())}>
          <span
            className={`icon-[solar--arrow-left-broken] size-8 transition duration-500 ease-in-out ${
              collapse ? "rotate-180" : ""
            }`}
          ></span>
        </button>
      </div>
      {!collapse && (
        <div className="w-full">
          {/* <div
            className="accordion-item active accordion-item-active:border accordion-item-active:rounded-box accordion-item-active:border-base-content/25"
            id="payment-border-active"
          >
            <button
              className="accordion-toggle inline-flex items-center gap-x-4 text-start"
              aria-controls="payment-border-active-collapse"
              aria-expanded="true"
              aria-labelledby="payment-border-active-heading"
            >
              <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0" />
              <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0" />
              <span id="payment-border-active-heading">Colori</span>
            </button>
            <div
              id="payment-border-active-collapse"
              className="accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="payment-border-active-heading"
              role="region"
            >
              <div className="p-4 flex flex-col gap-2">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="rounded-md"
                    style={{
                      backgroundColor: color,
                      height: "50px",
                      width: "100%",
                    }}
                  />
                ))}
              </div>
            </div>
          </div> */}
          <div className="flex flex-col gap-3 align-middle items-center">
            <p className="text-xl">Effetti</p>
            <RadioCard />
          </div>
          <div className="flex flex-col gap-3 align-middle items-center">
            {effectValue === "Mesh" && <MeshSetting />}
            {effectValue === "Fractal" && <FractalSettings />}
          </div>
        </div>
      )}
      <div className="flex justify-end  max-w-sm p-6 gap-2">
        <CercaButton />
        <SaveButton />
      </div>
    </div>
  );
}

export default SettingsDesktop;
