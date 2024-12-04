import { FC } from "react";
import { useAppSelector } from "../../../features/hooks";

interface FractalPiecesProps {
  pieces: number;
}

const FractalPices: FC<FractalPiecesProps> = ({ pieces }) => {
  const image = useAppSelector(
    (state) => state.track.track.album.images[0].url
  );

  // Classe comune per gli stili degli elementi
  const fractalStyle = `h-screen bg-gradient-to-r from-zinc-200/20 to-zinc-400/20  `;

  return (
    <>
      {Array.from({ length: pieces }).map((_, index) => {
        // Calcolo della larghezza e della posizione
        const width = `${100 / pieces}%`;
        const objectPosition = `${(index / (pieces - 1)) * 100}% 50%`;

        return (
          <img
            src={image}
            alt=""
            className={fractalStyle}
            style={{
              width,
              filter: "blur(12px)",
              objectFit: "cover",
              objectPosition,
            }}
            key={index}
          />
        );
      })}
    </>
  );
};

export default FractalPices;
