import { useState } from "react";
import Song from "./song";

const SongList = () => {
    const [songs] = useState([
        { song: 'Battery', artist: 'Metallica', year: '1986' },
        { song: 'Blackened', artist: 'Metallica', year: '1989' },
        { song: 'Koolaid', artist: 'Accept', year: '2017' },
        { song: 'Battery', artist: 'Metallica', year: '1986' },
        { song: 'Blackened', artist: 'Metallica', year: '1989' },
        { song: 'Koolaid', artist: 'Accept', year: '2017' },
        { song: 'Battery', artist: 'Metallica', year: '1986' },
        { song: 'Blackened', artist: 'Metallica', year: '1989' },
        { song: 'Koolaid', artist: 'Accept', year: '2017' }
       ]);       

    return(
        <div className="p-2 text-center">
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