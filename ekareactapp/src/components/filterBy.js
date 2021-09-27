const FilterBy = () => {
    return (
        <div>
            <div>
                <input type="radio" name="filter" id="song" value="song" checked/>
                <label htmlFor="song">Song</label>
            </div>
            
            <div>
                <input type="radio" name="filter" id="artist" value="artist"/>
                <label htmlFor="artist">Artist</label>
            </div>
            
            <div>
                <input type="radio" name="filter" id="year" value="year"/>
                <label htmlFor="year">Year</label>
            </div>

            <div>
                <input type="text" />
            </div>
        </div>
    );
}

export default FilterBy;