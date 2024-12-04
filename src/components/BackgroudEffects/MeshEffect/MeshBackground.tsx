import { useExtractColors } from "react-extract-colors";
import { useAppDispatch, useAppSelector } from "../../../features/hooks";
import { useEffect, useState } from "react";
import { setColors } from "../../../features/colorsSlice";

function MeshBackground({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const image = useAppSelector(
    (state) => state.track.track.album.images[0].url
  );
  const meshObj = useAppSelector((state) => state.mesh);

  const dispatch = useAppDispatch();

  const { colors } = useExtractColors(image, {
    maxColors: 6,
    format: "hex",
    maxSize: 800,
    sortBy: "dominance",
  });
  useEffect(() => {
    if (colors.length > 0) {
      dispatch(setColors(colors));
    }
  }, [colors, dispatch]);

  const [styleBackgroundImage, setStyleBackgroundImage] = useState("");
  const [styleBackgroundColor, setStyleBackgroundColor] = useState("");

  useEffect(() => {
    const gradients =
      colors
        .slice(0)
        .map((color) => {
          const positionX = Math.random() * 100; // Posizione casuale sulla X
          const positionY = Math.random() * 100; // Posizione casuale sulla Y
          return `radial-gradient(circle at ${positionX}% ${positionY}%, ${color} 3%, transparent 65%)`;
        })
        .join(",") || "none"; // Fallback se `colors` è vuoto
    const noiseString = `url("./noise.svg"),`;
    const newStyleBackgroundImage = meshObj.grainEffect
      ? noiseString + gradients
      : gradients;
    const newStyleBackgroundColor =
      colors[Math.floor(Math.random() * colors.length)] || "rgb(197, 153, 255)";

    setStyleBackgroundImage(newStyleBackgroundImage);
    setStyleBackgroundColor(newStyleBackgroundColor);
  }, [colors, meshObj.mesh]);

  useEffect(() => {
    if (meshObj.grainEffect) {
      const noiseString = `url("./noise.svg"),`;
      setStyleBackgroundImage(noiseString + styleBackgroundImage);
    } else {
      setStyleBackgroundImage(
        styleBackgroundImage.replace('url("./noise.svg"),', "")
      );
    }
  }, [meshObj.grainEffect]);
  return (
    <div
      id="print"
      className="flex justify-center items-center w-full h-full rounded-none lg:rounded-3xl relative"
      style={{
        backgroundImage: styleBackgroundImage,
        backgroundColor: styleBackgroundColor,
        backgroundBlendMode: "overlay, normal, normal, normal, normal, normal",
      }}
    >
      <div
        className="bg-black w-full h-full flex justify-center items-center"
        style={{
          filter: `opacity(${meshObj.backgroundOpacity}%)`,
        }}
      ></div>
      {children}
    </div>
  );
}

export default MeshBackground;
