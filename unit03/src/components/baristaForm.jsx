import { useState, useEffect } from "react";
import RecipeChoices from "./recipeChoices";
import drinksJson from "../drinks.json"

export default function BaristaForm() {

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });
    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }
      
    const [currentDrink, setCurrentDrink] = useState('')
    const [trueRecipe, setTrueRecipe] = useState({})

    const [tempCheck, setTempCheck] = useState("")
    const [syrupCheck, setSyrupCheck] = useState("")
    const [milkCheck, setMilkCheck] = useState("")
    const [blendedCheck, setBlendedCheck] = useState("")
      
    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setTempCheck('wrong');
        }
        else {
        setTempCheck("correct");
        }
        if (trueRecipe.syrup != inputs['syrup']){
        setSyrupCheck('wrong');
        }
        else {
        setSyrupCheck("correct");
        }
        if (trueRecipe.milk != inputs['milk']){
        setMilkCheck('wrong');
        }
        else {
        setMilkCheck("correct");
        }
        if (trueRecipe.blended != inputs['blended']){
        setBlendedCheck('wrong');
        }
        else {
        setBlendedCheck("correct");
        }
                                        
    }

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' 
        });
        setBlendedCheck("")
        setMilkCheck("")
        setSyrupCheck("")
        setTempCheck("")
            
        getNextDrink();          
    }

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients)

    }


    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button type="new-drink-button" className="button submit" onClick={onNewDrink}>🔄</button>
            </div>
            <form className="container">
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id="correct_temp">
                    {inputs["temperature"]} 
                    </div>
                    <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space" id="correct_syrup">
                    {inputs["syrup"]} 
                    </div>
                    <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="syrup"
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space" id="correct_milk">
                    {inputs["milk"]} 
                    </div>
                    <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space" id="correct_blended">
                    {inputs["blended"]} 
                    </div>
                    <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                    />
                </div>

                <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
                <button type="new-drink-button" className="button submit" onClick={onNewDrink}>New Drink</button>
            </form>
        </div>
    )
}