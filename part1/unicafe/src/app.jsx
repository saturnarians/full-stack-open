import { useState } from "react";
import Statistics from "./components/Statistics";

const App = () => {
const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  
  const [selected, setSelected] = useState(0);
  const [votes , setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const goodClick = () => setGood(good + 1);

  const neutralClick = () => setNeutral(neutral + 1);

  const badClick = () => setBad(bad + 1);

  const handleAnecdotes = () => setSelected((selected + 1) % anecdotes.length);

  const handleVote = () => {
    console.log("votes:", votes);
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

   const highestVotes = Math.max(...votes);
   const index = votes.indexOf(highestVotes);


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>

      <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
      />

      <h1>Anecdote of the day</h1>
    	  <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={handleVote}>Vote</button>
         <button onClick={handleAnecdotes}>Next Anecdotes</button>
    <h1>Anecdote with most votes</h1>
	  {highestVotes === 0 ? (
	  <p> No votes cast yet </p>
    ):(
    <div>
    <p>{anecdotes[index]}</p>
    <p>has {highestVotes} votes</p>
    </div>
	)
  }
    </div>
  );
};

export default App;
