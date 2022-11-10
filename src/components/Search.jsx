import { Input, Divider } from 'antd';

function Search({search, setSearch}) {
    function handleSearch(e){
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <>
            <Divider>Search</Divider>
        
            <label>Search</label>
            <div style={{display: "flex", flexDirection:"row"}} >
                <Input value={search} type="text" onChange={handleSearch} />
            </div>
        </>
  );
}

export default Search;