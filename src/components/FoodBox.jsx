import { Card, Col, Button } from 'antd';

function FoodBox({food, allFoods, setFoods}) {
    function deleteFood(name){
        console.log(name);
        let filteredFoods = allFoods.filter( el => el.name !== name);
        setFoods(filteredFoods);
    }

    return ( 
        <Col>
            <Card
                title={food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={food.image} height={60} alt="food" />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
                <Button type="primary" name={food.name} onClick={ () => deleteFood(food.name)}> Delete </Button>
            </Card>
        </Col>
     );
}

export default FoodBox;