import { useNavigate } from "react-router";
import OutputImage from "../components/OutputImage";
import SettingsDesktop from "../components/SettingsDesktop";
import SettingsMobile from "../components/SettingsMobile";
import { useAppSelector } from "../features/hooks";
import { useEffect } from "react";
import isTouchDevice from "../helper/isTouchDevice";

function OutputPage() {
  const navigate = useNavigate();
  const collapse = useAppSelector((state) => state.grid.collapse);
  const check = useAppSelector((state) => state.track.isValid);

  // Reindirizza alla homepage se check è falso
  useEffect(() => {
    if (!check) {
      navigate("/");
    }
  }, [check, navigate]); // Dipendenze necessarie per ricalcolare l'effetto

  // Evita di renderizzare il contenuto se il redirect è in corso
  if (!check) {
    return null; // Puoi anche mostrare uno spinner o una schermata di caricamento
  }

  return (
    <div className="h-full  bg-black grid grid-cols-12 grid-rows-1 ">
      {!isTouchDevice() && <SettingsDesktop />}
      {isTouchDevice() && <SettingsMobile />}

      <div
        className={`col-start-0 col-span-12 h-full p-0 lg:p-6  ${
          collapse
            ? "lg:col-span-11 lg:col-start-2"
            : "lg:col-span-9 lg:col-start-4"
        }`}
      >
        <OutputImage />
      </div>
    </div>
  );
}

export default OutputPage;
