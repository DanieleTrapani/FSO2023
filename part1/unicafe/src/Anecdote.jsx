const Anecdote = ({
  anecdotes,
  votes,
  selected,
  changeSelected,
  voteSelected,
}) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={changeSelected}>next anecdote</button>
      <button onClick={voteSelected}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
  );
};

export default Anecdote;
