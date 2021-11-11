const FilterBy = () => {
    return (
        <div className="p-2 border-gray-200 border-b-2 border-r-2">
            <div className="flex items-center justify-center">
                <input type="radio" name="filter" id="song" value="song" defaultChecked/>
                <label className="w-10" htmlFor="song">Song</label>
            </div>
            
            <div className="flex items-center justify-center">
                <input type="radio" name="filter" id="artist" value="artist"/>
                <label className="w-10" htmlFor="artist">Artist</label>
            </div>
            
            <div className="flex items-center justify-center">
                <input type="radio" name="filter" id="year" value="year"/>
                <label className="w-10" htmlFor="year">Year</label>
            </div>

            <div>
                <input placeholder="Search" type="text" />
            </div>
        </div>
    );
}

export default FilterBy;