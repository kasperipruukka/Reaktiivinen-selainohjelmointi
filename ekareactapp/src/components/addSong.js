const AddSong = () => {
    return (
        <div>
            <h2>Add a song</h2>
            
            <p><label htmlFor="SongName">Song name</label></p>
            <input type="text" id="SongName" />

            <p><label htmlFor="ArtistName">Artist name</label></p>
            <input type="text" id="ArtistName" />

            <p><label htmlFor="ReleaseYear">Release year</label></p>
            <input type="text" id="ReleaseYear" />

            <div>
                <button role="button">Save</button>
            </div>
        </div>
    );
}

export default AddSong;