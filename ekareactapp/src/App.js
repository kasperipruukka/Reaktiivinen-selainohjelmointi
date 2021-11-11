import Title from "./components/title";
import FilterBy from "./components/filterBy";
import AddSong from "./components/addSong";
import SongList from "./components/songList";
import TopSection from "./components/topSection";

function App() {
  return (
    <div id="wrapper" className="flex">
      <div id="tool" className="flex w-1/3 fixed justify-center flex-col bg-gradient-to-r from-white via-gray-50 to-white text-center">
        <Title appname="SongApp®"/>
        <FilterBy />
        <AddSong />
      </div>
      <div id="count" className="flex fixed justify-end w-screen pr-24 pt-10 text-xl text-gray-700">
        <TopSection />
      </div>
      <div id="result" className="flex w-9/12 justify-end mt-5">
        <SongList />
      </div>
    </div>
  );
}

export default App;
