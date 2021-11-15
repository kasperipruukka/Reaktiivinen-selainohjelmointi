import Song from "./song";

const SongList = ({songs}) => {
    if(songs.length < 1) {
        return (
            <div className="mt-5 text-center">
                <p className="m-0 self-center text-lg text-gray-500">No songs found...</p>
            </div>
        );
    }

    return(
        <div className="text-center">
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