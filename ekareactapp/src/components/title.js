const Title = ({appname}) => {
    return (
        <div className="p-2 border-gray-200 border-b-2 border-r-2">
            <h1 className="text-blue-700 font-semibold text-2xl">{appname}</h1>
        </div>
    );
}

export default Title;