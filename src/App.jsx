import Cards from "./Components/Cards/Cards";
import Filters from "./Components/Filters/Filters";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1358px]">
        <div className="w-[718px] h-[171px] mb-[28px]">
          <Filters />
        </div>
      </div>
      <div className="w-[1358px] mb-10">
        <Cards />
      </div>
    </div>
  );
}

export default App;
