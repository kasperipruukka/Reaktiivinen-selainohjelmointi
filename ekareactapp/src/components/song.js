const Song = ({song, artist, year}) => {
    return (
        <div className="p-2 border-gray-200 border-b-2 text-lg w-72 mb-2 shadow-inner">
            <div>
                <h3 className="text-xl text-blue-800 mb-2 font-semibold">{song}</h3>
                <p>{artist}, {year}</p>
                <input id="editbtn" className="shadow-md" type="button" value="Edit" />
                <input id="deletebtn" className="shadow-md" type="button" value="Delete" />
            </div>
        </div>
    );
}

export default Song;