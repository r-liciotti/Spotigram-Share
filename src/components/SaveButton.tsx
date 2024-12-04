import downloadjs from "downloadjs";

import domtoimage from "dom-to-image";

function SaveButton() {
  const handleDownloadImage = async () => {
    const element = document.getElementById("print") as HTMLElement;

    const elWidth = element.clientWidth;
    const elHeight = element.clientHeight;

    const scale = 2;

    const style2 = {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: element.clientWidth + "px", // use original width of DOM element to avoid part of the image being cropped out
      height: element.clientHeight + "px", // use original height of DOM element
    };

    domtoimage
      .toJpeg(element, {
        quality: 1,
        width: elWidth * scale,
        height: elHeight * scale,
        style: style2,
      })
      .then((dataUrl) => {
        downloadjs(dataUrl, "download.jpeg", "image/jpeg");
      });
  };
  return (
    <button
      className="btn rounded-full lg:rounded-xl  bg-neutral/100 "
      onClick={handleDownloadImage}
    >
      Salva
    </button>
  );
}

export default SaveButton;
