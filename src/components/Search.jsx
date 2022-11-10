import { Input, Divider, Button } from 'antd';
import { useState } from 'react';

function Search({allFoods, setFoods}) {
    const [search, setSearch] = useState("");
    const [originalFoods] = useState([...allFoods]);

    function handleSearch(e){
        e.preventDefault();
        setSearch(e.target.value);
        let filteredFoods = [...originalFoods].filter( food => food.name.toLowerCase().includes(e.target.value.toLowerCase()) );
        setFoods(filteredFoods);
    }

    function cancelSearch(e){
        e.preventDefault();
        setFoods(originalFoods);
        setSearch("");
    }

    return (
        <>
            <Divider>Search</Divider>
        
            <label>Search</label>
            <div style={{display: "flex", flexDirection:"row"}} >
                <Input value={search} type="text" onChange={handleSearch} />
                <Button type="primary" onClick={cancelSearch}>Cancel Search</Button>
            </div>
        </>
  );
}

export default Search;