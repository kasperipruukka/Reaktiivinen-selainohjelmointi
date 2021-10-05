import Title from "./components/title";
import FilterBy from "./components/filterBy";
import AddSong from "./components/addSong";
import SongList from "./components/songList";

function App() {
  return (
    <div>
      <Title appname="SongApp"/>
      <FilterBy />
      <AddSong />
      <SongList />
    </div>
  );
}

export default App;
