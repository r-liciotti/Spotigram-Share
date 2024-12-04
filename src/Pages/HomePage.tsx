import SearchBox from "../components/SearchBox/SearchBox";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center  w-full h-full">
      <div className="w-3/4 lg:w-1/3">
        <SearchBox />
      </div>
    </div>
  );
}

export default HomePage;
