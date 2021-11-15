import { useState } from "react";

const AddSong = ({saveSong}) => {
    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [year, setYear] = useState('');
    const addSong = () => {
        // Tallenna biisi
        saveSong({ song: name, artist: artist, year: year });

        // Tyhjennä kentät
        setName('');
        setArtist('');
        setYear('');
    }

    return (
        <div id="addSong" className="border-gray-200 p-2 border-r-2">
            <h2 className="text-blue-800 text-xl pb-2">Add a song</h2>
            
            <p><label htmlFor="SongName">Song name</label></p>
            <input 
            onChange={(e) => setName(e.target.value)} 
            type="text" name="song" 
            id="SongName" 
            placeholder="Eddie" 
            value={name} />

            <p><label htmlFor="ArtistName">Artist name</label></p>
            <input 
            onChange={(e) => setArtist(e.target.value)}
            type="text" 
            name="artist" 
            id="ArtistName" 
            placeholder="Example" 
            value={artist} />

            <p><label htmlFor="ReleaseYear">Release year</label></p>
            <input 
            onChange={(e) => setYear(e.target.value)}
            type="text" 
            name="year" 
            id="ReleaseYear" 
            placeholder="2000" 
            value={year} />

            <div>
                <button onClick={addSong} id="savebtn">Save</button>
            </div>
        </div>
    );
}

export default AddSong;