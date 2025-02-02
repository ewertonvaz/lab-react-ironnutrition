import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [ allFoods, setFoods ] = useState( foods );
  const [ visible, setVisible] = useState( false );
  const [ search, setSearch] = useState("");

  function changeVisible(){
    setVisible(!visible);
  }

  return (
    <div className="App">
      { visible === true && ( //Usando short circuit
        <AddFoodForm allFoods={allFoods} setFoods={setFoods} />
        )
      }

      <Button type="default" onClick={changeVisible}>{ visible ? "Hide Form" : "Add New Food"}</Button>

      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {
          allFoods.length > 0 ?
            allFoods
            .filter( food => food.name.toLowerCase().includes(search.toLowerCase()) )
            .map( (food, key) => {
              return (
                <FoodBox key={"food-" + key} food={food} allFoods={allFoods} setFoods={setFoods} />
              )
            }) 
          : 
            <div>
              <h1>Ops! There is no more content to show!</h1>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Empty_set_symbol.svg/220px-Empty_set_symbol.svg.png" alt="vazio" />
            </div>
        }
      </Row>
    </div>
  );
}

export default App;
