import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)
const RandomQuote = ({quoteList, selected}) => (<div>"{quoteList[selected]}"</div>)
const VoteValue = ({voteList, selected}) => (<div>has {voteList[selected]} votes!</div>)
//all our quotes
const quoteList = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Woah, just take it easy, man. - Drake Bell',
    'Meagan! - Drake and Josh Bell',
    'I wonder if being a sad loner gives you more raw materials to form song ideas. Is that where creativity comes from? From sad biz? - Finn',
    'I\'m just thinking about the future, I guess. We\'re on, like, the bleeding edge of history. Everything ahead of us is totally unknown and there\'s no guarantee that things are going to be all right. It\'s exciting, but it\'s also pretty scary - Jake Jr.',
    'I\'m more ancient than you. Someday, I will engulf the solar system. What was and what will be is meaningless. Meanwhile, you should wonder: are you just a two-headed pile of meat on a crash course with the cosmic dump? Or do you contain the soul memory of a million dead stars? How do you light a candle without a match? - The Sun to Psychic Ancient Tandem War Elephant',
    'This cosmic dance of bursting decadence and withheld permissions, twists all our arms collectively. But, if sweetness can win, and it can, then I\'ll still be here tomorrow to high five you yesterday, my friend. - Old Tart Toter',
    'It doesn\'t matter what happens to you. What matters is, what are you going to do about it? Are you going to complain and shrink or are you going to step into your greatness? - Robert Tew',
    'The real challenge of growth: mentally, emotionally, and spiritually comes when you get knocked down. - Les Brown',
    'The greatest illusion of this world is the illusion of separation. Things you think are separate and different are actually one and the same. We are all one people, but we live as if divided. - Guru Pathik',
    'No! Zuko! You must never give into dispair. Allow yourself to slip down that road and you surrender to your lowest instincts. In the darkest times, hope is something you give yourself. That is the meaning of inner strength. - General Iroh'
]
//const to hold all vote values for each quote
let voteList = new Array(quoteList.length).fill(0)

//const to show quote with most votes
const MostVotes = ({voteList,quoteList}) => {
    //const for quote and vote arrays
    let allQuote = quoteList
    let allVote = voteList
    //start top value at end of vote array
    let top = allVote[allVote.length -1]
    //start at the end of the quote array
    let topQuote = allQuote[allQuote.length - 1]
    //loop vote array to replace top value as vote array updates
    for(let i = allVote.length -1; --i > -1;){
        if (allVote[i] > top){
            //keep track of top value and corresponding quote
            top = allVote[i]
            topQuote = allQuote[i]
        }
    }
    if (top < 1) {
        return (<div>oof no votes</div>)
    }
    return(
        <div>
            <p>{topQuote}</p>
            <p>has {top} votes!!</p>
        </div>
    )
}

const App = () => {
    //const for which quote is displayed
    const [selected, setSelected] = useState(0)
    //add random number const to set selected quote
    const randomNumber = Math.floor(Math.random() * quoteList.length)
    const [vote, setVote] = useState(voteList)
    const gotSelected = () => { 
            setSelected(randomNumber)
    }
    //vote current quote
    const goVote = () => {
            setVote(voteList[selected] += 1)
    }
        return (
            <div style={{padding:5+'em'}}>
                <h1>Quote of the Day</h1>
                <RandomQuote quoteList={quoteList} selected={selected} />
                <VoteValue voteList={voteList} selected={selected}/>
                <Button onClick={goVote} text='Vote' />
                <Button onClick={gotSelected} text='Random Quote'/>
                <h1>Top Quote</h1>
                <MostVotes voteList={voteList} quoteList={quoteList}/>
            </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));