import { useState } from "react";
import Song from "./song";

const SongList = () => {
    const [songs] = useState([
        { song: 'biisi1', artist: 'esittäjä 1', year: '2001' },
        { song: 'biisi2', artist: 'esittäjä 2', year: '2002' },
        { song: 'biisi3', artist: 'esittäjä 3', year: '2003' }
       ]);       

    return(
        <div>
            {
                songs.map(({song, artist, year}, index) => {
                    return (
                        <Song key={song + '-' + index} song={song} artist={artist} year={year} />
                    )
                })
            }
        </div>
    );
}

export default SongList;