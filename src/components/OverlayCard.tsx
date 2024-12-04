import { useAppSelector } from "../features/hooks";

function OverlayCard() {
  const track = useAppSelector((state) => state.track.track);
  const overlayBgColor = useAppSelector((state) => state.mesh.overlayBgColor);

  return (
    <div
      className="flex flex-col p-4   rounded-2xl w-[350px] h-[500px] absolute"
      style={{
        backgroundColor: `${overlayBgColor}`,
      }}
    >
      <div
        className="h-full w-full  rounded-md bg-cover bg-center"
        style={{ backgroundImage: `url(${track.album.images[0].url})` }}
      ></div>
      <p className="text-left text-white text-xl mt-4">{track.name}</p>
      <p className="text-left text-white/70 mb-1">{track.artists[0].name}</p>
    </div>
  );
}

export default OverlayCard;
