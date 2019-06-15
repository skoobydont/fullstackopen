import React from 'react';
import ReactDOM from 'react-dom';

//Header contains rendering for the course's title and returns it wrapped in an h1 tag
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
//Part renders the name and exercise count for part
const Part = (props) => {
    return (
        <>
        <p>{props.part} : {props.exercises}</p>
        </>
    )
}
//Content renders each course part as a Part component
const Content = (props) => {
    //set parts array to const t
    const t = props.parts
    //two empty arrays to store course name and course exercise values
    const courseNames = []
    const courseExercises = []
    //use forEach function to iterate through parts array and add value to corresponding array
    t.forEach(parts => {
        courseNames.push(parts.name)
        courseExercises.push(parts.exercises)
    })
    //in the return function, we will use the values parsed from parts array to pass to Parts
    return (
        <div>
            <Part part={courseNames[0]} exercises={courseExercises[0]}/>
            <Part part={courseNames[1]} exercises={courseExercises[1]}/>
            <Part part={courseNames[2]} exercises={courseExercises[2]}/>
        </div>
    )
}
//Total renders the addition of all exercises from each part
const Total = (props) => {
    //set parts array to const t
    const t = props.parts
    //totalExercises will hold the incremental total number of exercises from parts array
    let totalExercises = 0
    //use forEach function to iterate through parts array, adding each exercise value to totalExercises
    t.forEach(parts => {
        totalExercises += parts.exercises
    });
    return (
        <p>Total number of exercises : {totalExercises}</p>
    )
}

//all of our data is stored in the App but we will make different components that will
//take the properties values and render them outside of the App
const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));