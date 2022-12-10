import { useState } from 'react'

const Rating = () => {
  const [clicks, setClicks] = useState({bad: 0, good: 0, 
neutral: 0})
  const badClick = () => {
    const newClick = {...clicks, bad: clicks.bad + 1}
    setClicks(newClick)
  }
  const goodClick = () => {
    const newClick = {...clicks, good: clicks.good + 1}
    setClicks(newClick)
  }
  const newtClick = () => {
    const newClick = {...clicks, neutral: clicks.neutral + 1}
    setClicks(newClick)
  }
  return (
    <>
    <h1>Give feedback</h1>
    <Button event = {badClick} word = "Bad"/>
    <Button event = {goodClick} word = "Good"/>
    <Button event = {newtClick} word = "Neutral"/>
    <Statistics bad = {clicks.bad} good = {clicks.good} newt = {clicks.neutral}/>
    </>
  )
}

const Statistics = ({bad, good, newt}) => {
  let total = bad + good + newt;
  if (total == 0){
    return (
      <>
      <h1>Statistics</h1>
      <h2>No feedback given</h2>
      </>
    )
  }
  return(
    <>
    <h1>Statistics</h1>
    <th>
    <StatisticsLine words = "Good" val = {good}/>
    <StatisticsLine words = "Bad" val = {bad}/>
    <StatisticsLine words = "Neutral" val = {newt}/>
    <StatisticsLine words = "Total" val = {total}/>
      <StatisticsLine words = "Average" val = {((good - bad)/total)}/>
    <StatisticsLine words = "Positive Feedback" val = {(good/total) * 100}/>
    </th>
      {/*<h2>Good: {good}</h2>
    <h2>Bad: {bad}</h2>
    <h2>Neutral: {newt}</h2>
    <h2>Total: {total}</h2>
    <h2>Average: {(good - bad)/total}</h2>
    <h2>Positive feedback: {(good/total) * 100}%</h2>*/}
    </> 
    )
}

const Button = ({event, word}) => {
  return(
    <button onClick = {event}>{word}</button>
  )
}

const StatisticsLine = ({words, val}) => {
  return(
    <tr><h2>{words}: {val}</h2></tr>
  )
}

export default Rating


