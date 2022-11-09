import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';

function App() {
  const [ allFoods, setFoods ] = useState( foods );

  return (
    <div className="App">
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {
          allFoods.map( (food, key) => {
            return (
              <FoodBox key={key} food={food} />
            )
          })
        }
      </Row>
    </div>
  );
}

export default App;
