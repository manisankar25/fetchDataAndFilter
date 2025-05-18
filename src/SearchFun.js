function SearchFun({searchInput,handleSearchInput}) {
    return (<div>

        <input type="text" value={searchInput} onChange={(e)=>{handleSearchInput(e.target.value)}}></input>
    </div>)
}
export default SearchFun;