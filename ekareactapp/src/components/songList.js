import Song from "./song";

const SongList = () => {
    return(
        <div>
            <Song song="Song1" artist="Artist1" year="1986"/>
            <Song song="Song2" artist="Artist2" year="2000"/>
            <Song song="Song3" artist="Artist3" year="2010"/>
        </div>
    );
}

export default SongList;