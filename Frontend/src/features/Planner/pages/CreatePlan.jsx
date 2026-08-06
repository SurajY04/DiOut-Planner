import React, { useState } from 'react'
import { usePlan } from '../hooks/usePlan';

const CreatePlan = () => {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [goal, setGoal] = useState('');
    const [isLactoseIntolerent, setIsLactoseIntolerent] = useState('');
    const [isVegetarian, setIsVegetarian] = useState();

    const { loading, handlePlanCreation } = usePlan();


    const handleSubmit = (e) => {
        e.preventDefault();
        handlePlanCreation({
            height,
            weight,
            gender,
            goal,
            isLactoseIntolerent,
            isVegetarian
        })
    }

    if(loading){
        return <main className='loader'></main>
    }

    return (
        <div id="create-plan-main">
            <div id="create-plan-main-upper">
                <div id="icon"><img src="/screen.png" /></div>
                <h1>Create your customize health plan with DiOut Planner</h1>
            </div>
            <div id="create-plan-main-middle">
                <form onSubmit={handleSubmit} id='myForm'>
                    <div id="form-left">
                        <label htmlFor="Persona"><h3>Persona</h3></label>
                        <div id="Persona">
                            <label htmlFor="height"><h4>Height</h4></label>
                            <input onChange={(e) => setHeight(e.target.value)} id='height' type="text" placeholder='Enter your height' name='height' />
                            <label htmlFor="weight"><h4>Weight</h4></label>
                            <input onChange={(e) => setWeight(e.target.value)} type="text" name="weight" id="weight" placeholder='Enter your weight' />
                            <label htmlFor="gender"><h4>Gender</h4></label>
                            <input onChange={(e) => setGender(e.target.value)} type="text" name='gender' id='gender' placeholder='Enter your gender' />
                        </div>
                    </div>
                    <div id="form-center">
                        <label htmlFor="goal"><h3>Goal</h3></label>
                        <input onChange={(e) => setGoal(e.target.value)} type="text" placeholder='Weight Loss / Weight Gain' id='goal' name='goal' />
                    </div>
                    <div id="form-right">
                        <label htmlFor="dietry-preference"><h3>Dietry-Preference</h3></label>
                        <div id="dietry-preference">
                            <p>Are You Lactose Intolerant?</p>
                            <div id="radio">
                                <label htmlFor="isLactoseIntolerent"><h4>Yes</h4></label>
                                <input onChange={(e) => setIsLactoseIntolerent(e.target.value)} type="radio" name="isLactoseIntolerent" id="true" value={true} />
                                <label htmlFor="isLactoseIntolerent"><h4>No</h4></label>
                                <input onChange={(e) => setIsLactoseIntolerent(e.target.value)} type="radio" name="isLactoseIntolerent" id="false" value={false} />
                            </div>

                            <p>Are You Vegetarian?</p>
                            <div id="radio">
                                <label htmlFor="isVegetarian"><h4>Yes</h4></label>
                                <input onChange={(e) => setIsVegetarian(e.target.value)} type="radio" name="isVegetarian" id="true" value={true} />
                                <label htmlFor="isVegetarian"><h4>No</h4></label>
                                <input onChange={(e) => setIsVegetarian(e.target.value)} type="radio" name="isVegetarian" id="false" value={false} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div id="create-plan-main-lower">
                <h3>Your body is unique. Your fitness plan should be too.</h3>
                <button type='submit' form='myForm'>Create Plan</button>
            </div>
        </div>
    )
}

export default CreatePlan