import { useAppSelector } from "../features/hooks";
import FractalBackground from "./BackgroudEffects/FractEffect/FractalBackground";
import MeshBackground from "./BackgroudEffects/MeshEffect/MeshBackground";
import OverlayCard from "./OverlayCard";

function OutputImage() {
  const effectRadio = useAppSelector((state) => state.effects.effect);
  return (
    <>
      {effectRadio === "Mesh" ? (
        <MeshBackground>
          <OverlayCard />
        </MeshBackground>
      ) : (
        <></>
      )}
      {effectRadio === "Fractal" ? (
        <FractalBackground>
          <OverlayCard />
        </FractalBackground>
      ) : (
        <></>
      )}
    </>
  );
}

export default OutputImage;
