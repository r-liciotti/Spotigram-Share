import { Item } from "../../interfaces/ITrack";

interface SearchItemProps {
  track: Item;
  type: string;
  img: string;
  alt: string;
  name: string;
  index: number;
  handleDispatchSearch: (track: Item) => void;
}
function SearchItem({
  track,
  type,
  img,
  alt,
  name,
  index,
  handleDispatchSearch,
}: SearchItemProps) {
  const data_combo_box_output_item = `{"group": {"name": "${type}", "title": "${type}"}}`;
  const handleClickSetInput = () => handleDispatchSearch(track);
  return (
    <div
      data-combo-box-output-item={data_combo_box_output_item}
      tabIndex={index}
      onClick={handleClickSetInput}
    >
      <a className="dropdown-item combo-box-selected:active" href="#">
        <img
          className="size-6 flex-shrink-0 rounded-full"
          src={img}
          alt={alt}
        />
        <span
          className="text-base-content/90"
          data-combo-box-search-text={name}
          data-combo-box-value=""
        >
          {name}
        </span>
      </a>
    </div>
  );
}

export default SearchItem;
