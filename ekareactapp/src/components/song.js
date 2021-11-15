const Song = ({song, artist, year}) => {
    return (
        <div className="pt-5 pb-5 pr-24 pl-24 border-gray-200 border-b-2 text-xl mb-2 shadow-inner bg-gray-50">
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