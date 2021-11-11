const AddSong = () => {
    return (
        <div className="border-gray-200 p-2 border-r-2">
            <h2 className="text-blue-800 text-xl pb-2">Add a song</h2>
            
            <p><label htmlFor="SongName">Song name</label></p>
            <input type="text" id="SongName" placeholder="Eddie" />

            <p><label htmlFor="ArtistName">Artist name</label></p>
            <input type="text" id="ArtistName" placeholder="Example" />

            <p><label htmlFor="ReleaseYear">Release year</label></p>
            <input type="text" id="ReleaseYear" placeholder="2000" />

            <div>
                <button id="savebtn">Save</button>
            </div>
        </div>
    );
}

export default AddSong;