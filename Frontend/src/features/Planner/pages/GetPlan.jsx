import React from 'react'
import { useParams } from 'react-router-dom'
import { usePlan } from '../hooks/usePlan';
import { useEffect } from 'react';
import { useState } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend, plugins, Colors } from 'chart.js/auto'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

const GetPlan = () => {
    const { handleGetPlan, plan } = usePlan();
    const { id } = useParams();

    ChartJs.register(ArcElement , Legend , Tooltip)

    useEffect(() => {
        handleGetPlan(id)
    }, [id])

    const [activeTab, setActiveTab] = useState('diet');

    const macroObj = plan?.[0]?.macros?.[0] || {};

    const protein = parseInt(macroObj.protein) || 0; 
    const carbs = parseInt(macroObj.carbs) || 0;    
    const fat = parseInt(macroObj.fat) || 0; 
    const kcal = parseInt (macroObj.kcal)

    const formattedMacroData = {
        labels: ['Protein (g)', 'Carbs (g)', 'Fats (g)', 'Kcal'],
        datasets: [
            {
                data: [protein , carbs , fat , kcal ],
                backgroundColor: ['#e63946', '#457b9d', '#e9c46a' , '#e97b49'],
            },
        ],
    };

    const chartOption = {
        plugins : {
            legend : {
                labels : {
                    color : '#ffffff'
                }
            }
        }
    }

    console.log("Macro Values:", plan?.[0]?.macros);

    return (
        <div id="get-plan-main">
            <div id="get-plan-main-upper">
                <nav>
                    <ul >
                        <li onClick={() => setActiveTab('diet')} className='upper'>Diet</li>
                        <li onClick={() => setActiveTab('workout')} className='upper'>Workout</li>
                        <li onClick={() => setActiveTab('macros')} className='upper'>Macros</li>
                    </ul>
                </nav>
            </div>
            <div id="get-plan-main-lower">
                {
                    plan.length > 0 ? (plan.map((dayPlan, planIndex) => (
                        (activeTab === 'diet' || activeTab === 'workout') ? <div id="card" key={planIndex}>
                            <div id="card-back">
                                {activeTab === 'diet' && (
                                    dayPlan?.diet && dayPlan.diet.length > 0 ? (
                                        dayPlan.diet.map((mealItem, index) => (
                                            <div className="meal" key={index}>
                                                <h4>Meal Type: {mealItem?.mealType}</h4>
                                                <h4>Meal:</h4>
                                                <ul>
                                                    {mealItem?.meal?.map((food, i) => (
                                                        <li key={i}>{food}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))
                                    ) : (
                                        <h2>No Diet for this day</h2>
                                    )
                                )}
                                {activeTab === 'workout' && (
                                    dayPlan?.workout && dayPlan.workout.length > 0 ? (
                                        dayPlan.workout.map((workoutItem, index) => (
                                            <div className="workout" key={index}>
                                                <h4>Muscle Focus: {workoutItem?.muscleFocus}</h4>
                                                <h4>Exercise:</h4>
                                                <ul>
                                                    {workoutItem?.excercise && workoutItem.excercise.length > 0 ? (
                                                        workoutItem.excercise.map((ex, exerIndex) => (
                                                            <li key={exerIndex}>{ex}</li>
                                                        ))
                                                    ) : (
                                                        <p>No Exercises</p>
                                                    )}
                                                </ul>
                                            </div>
                                        ))
                                    ) : (
                                        <h2>No Workout for this day</h2>
                                    )
                                )}
                            </div>
                            <div key={planIndex} id="card-front">{dayPlan?.day}</div>
                        </div> : <h1></h1>
                    ))) : <h1></h1>
                } ,
                {
                    (activeTab === 'macros') ? <div id="macros">
                        <Doughnut
                            data={formattedMacroData} 
                            options={chartOption}
                        />

                        <h2>
                            Your Weekly Diet Have : <br />
                            {protein} g <span>protein</span> <br />
                            {carbs}g carbs <br />
                            {kcal} calorie <br />
                            {fat}g fat
                        </h2>

                    </div> : <h1></h1>}
            </div>
        </div>
    )
}

export default GetPlan