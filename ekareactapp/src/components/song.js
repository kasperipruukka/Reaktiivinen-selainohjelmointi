const Song = ({song, artist, year}) => {
    return (
        <div>
            <div>
                <h3>{song}</h3>
                <p>{artist}, {year}</p>
                <input type="button" value="edit" />
                <input type="button" value="delete" />
            </div>
        </div>
    );
}

export default Song;