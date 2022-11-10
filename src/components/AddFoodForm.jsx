import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm({allFoods, setFoods}) {
    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFoods([...allFoods, form]);

        setForm({
            name: "",
            calories: 0,
            image: "",
            servings: 0
        });
    }

    const [form, setForm] = useState({
        name: "",
        calories: 0,
        image: "",
        servings: 0
    });

    return (  
        <form>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={form.name} type="text" name="name" onChange={handleChange} />

            <label>Image</label>
            <Input value={form.image} type="text" name="image" onChange={handleChange} />


            <label>Calories</label>
            <Input value={form.calories} type="number" name="calories" onChange={handleChange} />

            <label>Servings</label>
            <Input value={form.servings} type="number" name="servings" onChange={handleChange} />

            <Button type="submit" onClick={handleSubmit} style={{marginTop: "16px", marginBottom: "32px"}}>Create</Button>
        </form>
    );
}

export default AddFoodForm;