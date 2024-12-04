import { useNavigate } from "react-router";

function CercaButton() {
  const navigate = useNavigate();

  return (
    <div
      className="btn btn-circle flex justify-center items-center lg:w-fit lg:px-4 lg:rounded-xl"
      onClick={() => {
        navigate("/");
      }}
    >
      <span className="icon-[tabler--search] text-base-content/90  size-6  lg:hidden" />
      <p className="hidden lg:block ">Cerca</p>
    </div>
  );
}

export default CercaButton;
