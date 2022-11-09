import { Input, Divider } from 'antd';
import { useState } from 'react';

function Search({allFoods, setFoods}) {
    const [search, setSearch] = useState();

    function handleSearch(e){
        setSearch(e.target.value);
        let filteredFoods = allFoods.filter( food => food.name.toLowerCase().includes(search.toLowerCase()) );
        setFoods(filteredFoods);
    }

    return (
        <>
        <Divider>Search</Divider>
    
        <label>Search</label>
        <Input value={search} type="text" onChange={handleSearch} />
        </>
     );
}

export default Search;