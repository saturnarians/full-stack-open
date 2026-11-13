import StatisticLine from "./StatisticLine";
const Statistics = (props) => {
//  console.log("statistics props:", props);
 
 const sum = props.good + props.neutral + props.bad;
 const average = (props.good - props.bad) / sum;
 const positive = (props.good / sum) * 100;
    if (sum === 0) return <p> no feedback </p>;
  return (
    <div>
    <h1>Statistics</h1>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />  
    <StatisticLine text="all" value={sum} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive} />
    </div>
  )
} 

export default Statistics;
