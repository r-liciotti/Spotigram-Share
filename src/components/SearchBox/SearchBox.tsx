import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchItem from "./SearchItem";
import { searchSong } from "../../services/SpotifyAPI";
import { Item, RootTracks } from "../../interfaces/ITrack";
import { useAppDispatch } from "../../features/hooks";
import { setTrack } from "../../features/trackSlice";
import { useNavigate } from "react-router";

function SearchBox() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");

  // Gestore dell'input
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  const handleDispatchSearch = (track: Item) => {
    setSearchItem(track.name);
    dispatch(setTrack(track));
    navigate("/output");
  };

  // Usa `useQuery` per chiamare `searchSong`
  const { data, isLoading, isError, error } = useQuery<RootTracks>({
    queryKey: ["searchSong", searchItem],
    queryFn: () => searchSong(searchItem),
    enabled: !!searchItem,
    refetchOnWindowFocus: false,
  });

  const handleSearchButton = () => {
    if (!data) return;
    const t = data.tracks.items.filter(
      (item) => item.name.toLowerCase === searchItem.toLowerCase
    );
    if (t.length > 0) {
      handleDispatchSearch(t[0]);
    }
  };
  return (
    <div
      id="combo-box-method"
      className="relative"
      data-combo-box='{
                "groupingType": "default",
                "preventSelection": true,
                "isOpenOnFocus": true,
                "groupingTitleTemplate": "<div class=\"block text-xs text-base-content/50 m-3 mb-1\"></div>",
                }'
    >
      <div className="relative flex gap-2">
        <span className="icon-[tabler--search] text-base-content/90 absolute start-3 top-1/2 size-4 flex-shrink-0 -translate-y-1/2" />
        <input
          name="searchInput"
          className="input ps-8 h-auto"
          type="text"
          placeholder="Search for a song"
          role="combobox"
          aria-expanded="false"
          value={searchItem}
          onChange={handleChangeInput}
        />

        <button
          onClick={handleSearchButton}
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_200%] animate-gradient-rotate hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg flex content-center items-center p-2"
        >
          <span className="icon-[solar--atom-broken] text-base-content/90 size-8"></span>
        </button>
      </div>
      <div
        className="bg-base-100 rounded-box p-2 shadow-lg"
        style={{ display: "block" }}
        data-combo-box-output=""
      >
        <div data-combo-box-output-items-wrapper="" className="space-y-0.5">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error: {String(error)}</p>}

          {data?.tracks?.items.map((track, index) => (
            <SearchItem
              key={track.id}
              type="Song"
              img={track.album.images[0]?.url || ""}
              alt={track.name}
              name={track.name}
              index={index}
              track={track}
              handleDispatchSearch={handleDispatchSearch}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
