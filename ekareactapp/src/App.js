import Title from "./components/title";
import FilterBy from "./components/filterBy";
import AddSong from "./components/addSong";
import SongList from "./components/songList";
import TopSection from "./components/topSection";
import { useState } from "react";

function App() {

  const [songs, setSongs] = useState([]);   

  const addSong = (song) => {
    setSongs([...songs, song]);
  }

  return (
    <div id="wrapper" className="flex">
      <div id="tool-container" className="w-2/6 flex">
        <div id="tool" className="flex w-2/6 fixed justify-center flex-col bg-gray-50 text-center">
          <Title appname="SongApp®"/>
          <FilterBy />
          <AddSong saveSong={addSong} />
        </div>
      </div>
      <div id="result-container" className="w-4/6 flex-col">
        <div id="count" className="flex w-4/6 justify-center bg-gray-50 shadow-md items-center h-24 border-b-2 fixed">
          <TopSection />
        </div>
        <div id="result" className="flex mt-32 justify-center">
          <SongList songs={songs} />
        </div>
      </div>
    </div>
  );
}

export default App;
