import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({feedback, text}) => ( <button onClick={feedback}> {text} </button> )
//corrected syntax for inserting table structure below sr:https://github.com/facebook/react/issues/5652
const Statistic = ({text, value}) => ( <tr><td>{text}</td><td>{value}</td></tr>)
const Stats = ({count, total}) => {
    //display alternate div if there is no clicks recorded
    if (total < 1) {
        return(
            <div>
                oof no stats yet
            </div>
        )
    }
    //const that calculates % positive by dividing total good by overall total (*100 to display as %)
    const percentPos = (count[0] / total) * 100
    //weighted score - assigning weights to review columns in count array (average found by (sum * weight) / total)
    const weightedScore = ((count[0] * 1) + (count[1] * 0) + (count[2] * -1)) / total
    return(
        <table>
            <tbody>
                <Statistic text="good: " value={count[0]} />
                <Statistic text="neutral: " value={count[1]} />
                <Statistic text="bad: " value={count[2]} />
                <Statistic text="total: " value={total} />
                <Statistic text="weighted average: " value={weightedScore} />
                <Statistic text="percent positive: " value={percentPos} />
            </tbody>
        </table>
    )
}

const App = () => {
    //save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    //const for total reviews
    const [total, setTotal] = useState(0)
    //function to handle good reviews
    const goodReview = () => { setGood(good + 1)
        setTotal(total +1) }
    //bad reviews
    const badReview = () => { setBad(bad + 1)
        setTotal(total +1) }
    //neutral reviews
    const neutralReview = () => { setNeutral(neutral + 1)
        setTotal(total +1) }
    
    return (
        <div>
            <h1>Feedback</h1>
            <Button feedback={goodReview} text='Good'/>
            <Button feedback={neutralReview} text='Neutral' />
            <Button feedback={badReview} text='Bad' />
            <h2>Stats</h2>
            <Stats count={[good, neutral, bad]} total={total}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));